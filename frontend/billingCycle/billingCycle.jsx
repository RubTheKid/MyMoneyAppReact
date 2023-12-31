import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ContentHeader from '../src/common/template/contentHeader'
import Content from '../src/common/template/content'
import Tabs from "../src/common/tab/tabs"
import TabsHeader from "../src/common/tab/tabsHeader"
import TabsContent from "../src/common/tab/tabsContent"
import { selectTab } from "../src/common/tab/tabActions"
import TabHeader from "../src/common/tab/tabHeader"
import TabContent from "../src/common/tab/tabContent"
import { showTabs } from "../src/common/tab/tabActions"
import { init, create, update, remove } from "./billingCycleActions"

import List from "./billingCycleList"
import Form from "./billingCycleForm"


class BillingCycle extends Component {

    componentWillMount(){
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small='cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=' Listar' icon='bars' target='tabList' />
                            <TabHeader label=' Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label=' Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label=' Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={ this.props.create } 
                                submitLabel='Incluir'
                                submitClass='primary' />
                                </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={ this.props.update }
                                submitLabel='Alterar'
                                submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={ this.props.remove }
                                submitLabel='Excluir'
                                submitClass='danger'
                                readOnly={true}/>
                            </TabContent>
                        </TabsContent>    
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)