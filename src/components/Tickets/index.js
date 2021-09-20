import React, { useMemo } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { Ticket } from '../../components'
import { checkFilterTicketsAction } from '../../redux/actions'

const Tickets = props => {
    const { data, expensive, transfers } = props

    const getLengthStops = segments => {
        let stopsAll = 0
        segments.forEach(element => {
            if(stopsAll < element.stops.length){
                stopsAll = element.stops.length
            }
        });
        return stopsAll
    }

    const filtredData = useMemo(() => {
        const filtred = data.filter(element => transfers === 0 ? true : transfers - 1 === getLengthStops(element.segments))
        return filtred.sort((a, b)=>{
            if(expensive) {
                return a.price - b.price
            } else {
                const first = (a.segments[0].duration + a.segments[1].duration)
                const last = (b.segments[0].duration + b.segments[1].duration)
                return first - last
            }
        })
    },[data, expensive, transfers])

    return (
        <div className="tickets">
            {
                filtredData.map((el, index) =>
                    <Ticket key={+(el.price.toString() + index)} 
                            price={el.price.toLocaleString('ru')} 
                            carrier={el.carrier} 
                            segments={el.segments}/>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        expensive: state.changeTopPanel.expensive,
        transfers: state.changeLeftPanel.filterTransfers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkFilterTickets: payload => dispatch(checkFilterTicketsAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)