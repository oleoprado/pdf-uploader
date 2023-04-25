import { Input, Button, Upload } from 'antd'
import type { UploadProps } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'

import styles from './styles.module.scss'
import { useState } from 'react'

const { Search } = Input

function SearchAndUpload() {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleChange: UploadProps['onChange'] = (info) => {
    let newFileList = [...info.fileList]

    // limita o numero de arquivos uploaded
    newFileList = newFileList.slice(-3)

    //  le a resposta e mostra o link do arquivo
    newFileList = newFileList.map((file) => {
      if (file.response) file.url = file.response.url
      return file
    })

    setFileList(newFileList)
  }

  const props = {
    action: 'https://localhost:5173/',
    onChange: handleChange,
    multiple: true,
  }

  const onSearch = (value: string) => console.log(value)

  return (
    <form action="" className={styles.container}>
      <Search
        placeholder="Digite o que deseja buscar"
        allowClear
        onSearch={onSearch}
        className={styles.input}
      />
      <Upload
        {...props}
        fileList={fileList}
        // className={styles.}
      >
        <Button icon={<UploadOutlined />}>Upload PDF</Button>
      </Upload>
    </form>
  )
}

export default SearchAndUpload
