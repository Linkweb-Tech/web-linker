console.log('React is BACK !!!');

const { Component, render } = wp.element;
class App extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'CallMeMirkoDragic2',
            height: 400,
            parentNode: document.getElementById('jitsy'),
            interfaceConfigOverwrite: {
                SHOW_WATERMARK_FOR_GUESTS: true,
                SHOW_BRAND_WATERMARK: true,
                BRAND_WATERMARK_LINK: 'https://linkweb.fr/static/logo-linkweb-d4aa9a257bc876fae1e0b811f2b2accb.png',
                INVITATION_POWERED_BY: false,
                MOBILE_APP_PROMO: false,
                DEFAULT_REMOTE_DISPLAY_NAME: 'Moirko Dragic',
                DEFAULT_LOCAL_DISPLAY_NAME: 'Mirko',
                SHOW_JITSI_WATERMARK: true,
                JITSI_WATERMARK_LINK: 'https://linkweb.fr',
            },
        };
        const api = new JitsiMeetExternalAPI(domain, options);
    
        console.log(api);
    }

    render(){
        return(
            <div id="jitsy"></div>  
        )
    }
}


render(
    <App />,
    document.getElementById('app')
);
