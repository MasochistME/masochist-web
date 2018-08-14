import React from 'react'
import axios from 'axios'
import events from '../../mock/events'

export class SectionUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            updating: false
        }        
        this.checkStatus = this.checkStatus.bind(this);
        this.sendUpdateRequest = this.sendUpdateRequest.bind(this);
        
        this.domain = 'http://localhost:3001' //this will get changed when backend and frontend have the same port
        this.statusInterval = setInterval(() => this.checkStatus(), 1000);
    }

    checkStatus() {
        let url = `${this.domain}/api/status`
        axios.get(url)
            .then(res => this.setState({ ...res.data }))
            .catch(err => console.log(err))
    }

    sendUpdateRequest() {
        let url = `${this.domain}/api/update`
        axios.get(url)
            .then(res => console.log(res.data.content))
            .catch(err => console.log(err))
    }

    render() {
        return(
        <div className='section'>
            <p className='section-title'>Last updated: { new Date(this.state.lastUpdate).toLocaleString() }</p>
            {
                this.state.updating
                    ? ( <div className='update-progress-bar-border' title={ `${this.state.updateStatus}%`}>
                            <div className='update-progress-bar' style={{ width:`${this.state.updateStatus}%` }}></div>
                        </div>
                        )
                    : (
                        <button onClick={() => this.sendUpdateRequest() }>Update</button>
                    )
            }
            
                
        </div>)
    }
}

export class SectionTop extends React.Component { 
    render() {
        return(
        <div className='section'>
            <p className='section-title'>Top 10 members</p>
            <div>
            </div>
        </div>)
    }
}

export class SectionHistory extends React.Component {
    sortEvents = event => {
        if (event.type === 'completion')
            return '100%'
        if (event.type === 'newgame')
            return 'new game'
    }

    render() {
        return(
        <div className='section'>
            <p className='section-title'>Last 10 events</p>
            <div>
                {
                    events.map(event => 
                        <div className='small-event'>
                            { this.sortEvents(event) }
                        </div>
                    )
                }
            </div>
        </div>)
    }
}