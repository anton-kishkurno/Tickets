import React from 'react'
import TicketData from './TicketData'
import './style.scss'

const Ticket = props => {
    const { price, carrier, segments } = props
    return (
        <div className="ticket">
        <div className="ticket-top">
            <p className="ticket-top__price">{price} Р</p>
            <div className="ticket-top__logo"><img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier}/></div>
        </div>
        <div className="ticket-bottom">
            {
            segments.map((segment, index) =>
                <TicketData key={index + segment.date} 
                            origin={segment.origin}
                            destination={segment.destination}
                            date={segment.date}
                            stops={segment.stops}
                            duration={segment.duration}
                            />
            )
            }
        </div>
        </div> 
    )
}

export default Ticket