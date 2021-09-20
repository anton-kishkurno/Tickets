import React from 'react'
import { connect } from 'react-redux'
import {
    FilterPanel,
    TopPanel,
    Tickets,
    LoadButton
} from '../../components'
const logo = '../../logo.png'

const Home = props => {
    const { data, loadData, errData } = props
    return (
        <div className="App">
            <img className="App__logo" src={logo} alt="logo" />
            <div className="App__row">
                <div className="App__col">
                    <FilterPanel />
                </div>
                <div className="App__col">
                    <TopPanel />
                    {loadData && !errData && 'Загрузка...'}
                    {!loadData && <Tickets data={data}/> }
                    {errData && 'Ошибка, перезагрузите страницу!!!'}
                    <LoadButton />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.getData.data,
        loadData: state.getData.loadData,
        errData: state.getData.errData,
        expensive: state.changeTopPanel.expensive,
    }
}

export default connect(mapStateToProps, null)(Home)