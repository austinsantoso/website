import logo from './logo.svg';

function Item() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            height: '100%',
            margin: '10 10 10 10px'
        }}>

            <div class="card flex-row flex-wrap" style={{ width: '90%' }}>
                <div class="card-header border-0" style={{ width: '20%' }}>
                    <img src={logo} className="App-logo" alt="logo" style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }} />
                </div>
                <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    {/* <a href="#" class="btn btn-primary">BUTTON</a> */}
                </div>
                {/* <div class="w-100"></div>
                <div class="card-footer w-100 text-muted">
                    FOOTER
                </div> */}
            </div>

        </div>
    )
}

export default Item
