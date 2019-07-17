import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

class Tests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tests: [],
    };
  }


  componentDidMount() {
      fetch('http://10.111.7.3/api/v1/tests', {
        method: 'get',
        headers: {Authorization: localStorage.token.replace(/"/g, ''),
      }})

      .then(response => response.json())
      .then(data => this.setState({ tests: data }));
  }


    
    // const data = [
    //   {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    //     tags: ['nice', 'developer'],
    //   },
    //   {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    //     tags: ['loser'],
    //   },
    //   {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    //   },
    // ];
    render() {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => text,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'agdescriptione',
        },
        {
          title: 'Questions',
          dataIndex: 'questions_count',
          key: 'questions_count',
        },
      ];
  

      const { tests, isLoading, error } = this.state;
  
      if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }
  
    return (
      <Table 
        columns={columns} 
        dataSource={tests} 
        pagination={false}
      />
    );
  }
}

export default Tests;