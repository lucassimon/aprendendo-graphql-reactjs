import React, { Component } from 'react'
import BoxUser from '../components/users/BoxUser'

class UserList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
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
                    <h3 className="title">
                        Temos {this.state.count} usuários cadastrados no sistema
                    </h3>

                    {items}
                </div>
            </section>
        )


    }
}


export default UserList