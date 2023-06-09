import { Input, Button } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { UploadOutlined } from '@ant-design/icons'

import UploadPdfModal from '../UploadPdfModal'

import {
  requestDataWithSearchInput,
  fetchingData,
  clearData,
} from '../../store/modules/search/actions'

import styles from './styles.module.scss'

const { Search } = Input

function SearchAndUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  function handleOk() {
    setIsModalOpen(false)
  }

  function handleCancel() {
    setIsModalOpen(false)
  }

  const onSearch = async () => {
    if (searchInput.length) {
      dispatch(fetchingData())
      dispatch(requestDataWithSearchInput(searchInput))
    }
  }

  useEffect(() => {
    if (!searchInput.length) {
      dispatch(clearData())
    }
  }, [searchInput, dispatch])

  return (
    <>
      <div className={styles.container}>
        <Search
          placeholder="Digite o que deseja buscar"
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
          onSearch={onSearch}
          className={styles.input}
        />
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          icon={<UploadOutlined style={{ fontSize: '16px' }} />}
        >
          Upload PDF
        </Button>
      </div>
      <UploadPdfModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default SearchAndUpload
