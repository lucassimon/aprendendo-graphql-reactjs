import React, { Component } from 'react'
import BoxUser from '../../components/users/BoxUser'
import BtnAddUser from '../../components/users/BtnAddUser'
import BoxSearch from '../../components/BoxSearch'
import BoxSearchPerPage from '../../components/BoxSearchPerPage'
import BoxFilterUser from '../../components/users/BoxFilterUser'
import Paginate from '../../components/Paginate'

class UserList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Usuário(s)',
            count: 0,
            fields:[{key:'email', value:'Email'}]
        }
    }



    render() {

        const items = this.props.items.map((item, index)=>{
            return (
                <BoxUser
                    key={index}
                    id={item.id}
                    email={item.email}
                    active={item.active}
                    is_admin={item.is_admin}
                    is_superuser={item.is_superuser}
                />
            )
        })

        return (
            <section className="">
                <div className="container">

                    <BtnAddUser />

                    <BoxSearch fields={this.state.fields} />

                    <BoxSearchPerPage
                        count={this.state.count}
                        name={this.state.name}
                    />


                    <div className="columns">
                        <div className="column is-one-quarter">
                            <BoxFilterUser />
                        </div>
                        <div className="column">
                            {items}
                        </div>
                    </div>

                    <Paginate />
                </div>
            </section>
        )
    }
}


export default UserList