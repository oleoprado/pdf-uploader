import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import styles from './styles.module.scss'

interface IDataType {
  key: string
  file: string
  description: string
  unity: string
  quantity: string
}

const data: IDataType[] = [
  {
    key: '1',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '2',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '3',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '1',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '2',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '3',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '1',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '2',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
  {
    key: '3',
    file: 'teste.pdf',
    description: 'Resultado da pesquisa XXXXX',
    unity: 'M',
    quantity: '1258',
  },
]

function TableComponent() {
  const columns: ColumnsType<IDataType> = [
    {
      key: '1',
      title: 'Arquivo',
      dataIndex: 'file',
    },
    {
      key: '2',
      title: 'Descrição',
      dataIndex: 'description',
    },
    {
      key: '3',
      title: 'Un',
      dataIndex: 'unity',
    },
    {
      key: '4',
      title: 'Quantidade',
      dataIndex: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  return (
    <Table<IDataType>
      columns={columns}
      dataSource={data}
      className={styles.container}
    />
  )
}

export default TableComponent
