import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'

import styles from './styles.module.scss'

interface IDataType {
  id: string
  name: string
  description: string
  unit: string
  quantity: string
}

function TableComponent() {
  const [data, setData] = useState<IDataType[]>([])

  const columns: ColumnsType<IDataType> = [
    {
      key: '1',
      title: 'Arquivo',
      dataIndex: 'name',
    },
    {
      key: '2',
      title: 'Descrição',
      dataIndex: 'description',
    },
    {
      key: '3',
      title: 'Un',
      dataIndex: 'unit',
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

  // TODO: chamar o dispatch para buscar os dados da tabela
  useEffect(() => {
    api.get('/files').then((response) => setData(response.data))
  }, [])

  return (
    <Table<IDataType>
      columns={columns}
      dataSource={data}
      className={styles.container}
      rowKey="id"
    />
  )
}

export default TableComponent
