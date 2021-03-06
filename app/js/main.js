
import svg from './svg.svg'
import 'regenerator-runtime/runtime'


gapi.load('client:auth2', init);

// gapi.load('client', init);
async function init() {
    gapi.client.setApiKey('AIzaSyBaLx1pf7T2E0ANuktHCAXDu9bfIpGU4X8')
    gapi.client.init({
        apiKey: 'AIzaSyBaLx1pf7T2E0ANuktHCAXDu9bfIpGU4X8',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        clientId: '287520759621-qhdchtaia0lrmvkqtfgjhsjc5tmgsch8.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive'
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
        

        
        // try {

        //     gapi.client.drive.files.get({
        //         fileId: '1-HNMkki3uaIxktLslMrvFVF19azlRfdQ',
        //         alt: "media"
        //       }).then( (res) => {
                

        //         console.log(res.body)
        //       });
        //   } catch (e) {
        //     console.error(e);
        //   }
    });
}

function updateSigninStatus(isSignedIn) {
    if( isSignedIn ) new Projector()
    else gapi.auth2.getAuthInstance().signIn();
}

class Projector{
    constructor(){
        this.posters = []
        this.currentPosterIndex = 0
        this.fecthInterval = 60000
        this.switchInterval = 20000
        setInterval( ( ) => this.fetch(), this.fecthInterval )
        setInterval( ( ) => this.switch(), this.switchInterval )
        this.fetch()

    }

    addPoster( id ){
        var firma = 'M383.8,7.1c-2.7,0-4.3,1.4-5.1,3.6V7.4h-5.3v17.9h5.4v-8.3c0-3.4,1.7-4.9,4.8-4.9h1.4V7.2C384.6,7.1,384.2,7.1,383.8,7.1 M361.5,10.9c2.2,0,3.6,1.3,4,3.5h-7.9C358,12,359.6,10.9,361.5,10.9 M370.9,16.8c0-6-3.6-9.9-9.2-9.9s-9.2,3.7-9.2,9.4c0,5.7,3.8,9.4,9.3,9.4c4.3,0,7.8-2.2,8.8-6h-5.1c-0.6,1.3-1.8,2-3.6,2c-2.1,0-3.7-1.2-4.1-3.8h13.3L370.9,16.8L370.9,16.8z M351.2,11.3v-4h-3.4V2h-5.4v5.3h-2.7v4h2.7v9c0,3.7,1.9,5.1,6.4,5.1c0.8,0,1.7,0,2.5-0.1v-4h-1.4c-1.4,0-2-0.2-2-1.6v-8.4C347.7,11.3,351.2,11.3,351.2,11.3z M330.5,25.8c5.4,0,8.5-2.1,8.5-5.8c0-3.2-2-4.9-6.3-5.6l-2.7-0.4c-1.7-0.3-2.6-0.7-2.6-1.8c0-1,0.8-1.7,2.7-1.7s3.2,0.6,3.3,2.5h5c-0.2-3.5-2.3-6.1-8.3-6.1c-5.2,0-8,2.1-8,5.7c0,3.2,2.3,4.9,6,5.5l2.3,0.4c2.4,0.4,3.1,0.9,3.1,2s-0.8,1.7-3,1.7c-2.3,0-3.2-0.7-3.4-2.6h-5.3C322.2,24,325,25.8,330.5,25.8 M311.3,21.4c-2.4,0-3.9-1.6-3.9-5s1.5-5,3.9-5c2.4,0,3.9,1.6,3.9,5S313.7,21.4,311.3,21.4 M311.3,25.7c5.7,0,9.4-3.7,9.4-9.4s-3.7-9.4-9.4-9.4c-5.7,0-9.4,3.7-9.4,9.4S305.6,25.7,311.3,25.7 M290.9,21.4c-2.4,0-3.9-1.6-3.9-5s1.4-5,3.9-5c2.4,0,3.8,1.5,3.8,4.9S293.3,21.4,290.9,21.4 M292.4,6.9c-2.5,0-4.3,1.1-5.4,2.8V7.3h-5.3v24.7h5.4v-9c1.1,1.6,2.9,2.6,5.3,2.6c4.9,0,7.8-3.7,7.8-9.4S297.3,6.9,292.4,6.9 M263.1,31.2h17.1v-4h-17.1V31.2z M262.4,11.3v-4H259V2h-5.4v5.3h-2.7v4h2.7v9c0,3.7,1.9,5.1,6.3,5.1c0.8,0,1.7,0,2.5-0.1v-4H261c-1.4,0-2-0.2-2-1.6v-8.4C258.9,11.3,262.4,11.3,262.4,11.3z M241.8,25.8c5.4,0,8.5-2.1,8.5-5.8c0-3.2-2.1-4.9-6.3-5.6l-2.7-0.4c-1.7-0.3-2.6-0.7-2.6-1.8c0-1,0.8-1.7,2.7-1.7s3.2,0.6,3.3,2.5h5c-0.2-3.5-2.3-6.1-8.3-6.1c-5.2,0-8.1,2.1-8.1,5.7c0,3.2,2.3,4.9,6,5.5l2.3,0.4c2.4,0.4,3.1,0.9,3.1,2s-0.8,1.7-3,1.7c-2.3,0-3.2-0.7-3.4-2.6h-5.3C233.4,24,236.3,25.8,241.8,25.8 M222.3,10.9c2.2,0,3.6,1.3,4,3.5h-7.9C218.8,12,220.3,10.9,222.3,10.9 M231.6,16.8c0-6-3.6-9.9-9.2-9.9s-9.2,3.7-9.2,9.4c0,5.7,3.8,9.4,9.3,9.4c4.3,0,7.8-2.2,8.8-6h-5.1c-0.6,1.3-1.8,2-3.6,2c-2.1,0-3.7-1.2-4.1-3.8h13.3V16.8z M211.9,11.3v-4h-3.4V2h-5.4v5.3h-2.7v4h2.7v9c0,3.7,1.9,5.1,6.4,5.1c0.8,0,1.7,0,2.5-0.1v-4h-1.4c-1.4,0-2.1-0.2-2.1-1.6v-8.4C208.5,11.3,211.9,11.3,211.9,11.3z M190.6,21.4c-2.4,0-3.9-1.6-3.9-5s1.5-5,3.9-5c2.4,0,3.9,1.6,3.9,5S193,21.4,190.6,21.4 M190.6,25.7c5.7,0,9.4-3.7,9.4-9.4s-3.7-9.4-9.4-9.4c-5.7,0-9.4,3.7-9.4,9.4S184.9,25.7,190.6,25.7 M179.2,7.1c-2.7,0-4.3,1.4-5.1,3.6V7.4h-5.3v17.9h5.4v-8.3c0-3.4,1.7-4.9,4.8-4.9h1.4V7.2C180,7.1,179.6,7.1,179.2,7.1 M157.1,21.4c-2.4,0-3.9-1.6-3.9-5s1.4-5,3.9-5c2.4,0,3.8,1.5,3.8,4.9S159.6,21.4,157.1,21.4 M158.6,6.9c-2.5,0-4.3,1.1-5.4,2.8V7.3h-5.3v24.7h5.4v-9c1.1,1.6,2.9,2.6,5.3,2.6c4.9,0,7.8-3.7,7.8-9.4S163.5,6.9,158.6,6.9 M129.3,31.2h17.1v-4h-17.1V31.2z M120,25.7c5,0,8.5-2.9,8.8-7.5h-5.4c-0.2,2.1-1.7,3-3.5,3c-2.3,0-3.7-1.5-3.7-4.9s1.4-5,3.7-5c1.7,0,3.1,0.8,3.4,2.7h5.4c-0.5-4.4-3.8-7.2-8.8-7.2c-5.6,0-9.2,3.7-9.2,9.4S114.4,25.7,120,25.7 M103,25.3h5.4V7.4H103V25.3z M103.1,5.3h5.2V0.7h-5.2V5.3z M94.4,25.3h5.4V0.6h-5.4V25.3z M82.7,21.4c-2.4,0-3.8-1.6-3.8-5s1.4-5,3.8-5c2.4,0,3.8,1.5,3.8,4.9S85.1,21.4,82.7,21.4 M84.2,6.9c-2.4,0-4.1,1-5.3,2.6v-9h-5.4v24.7h5.3v-2.4c1.2,1.7,2.9,2.8,5.4,2.8c4.9,0,7.8-3.7,7.8-9.4S89,6.9,84.2,6.9 M64.9,7.4v10c0,2.6-1.7,3.7-3.4,3.7c-2,0-2.9-1.1-2.9-3.1V7.4h-5.4v11.7c0,4.4,2.7,6.6,6.2,6.6c2.6,0,4.4-1.3,5.6-3v2.5h5.3V7.4H64.9z M41.9,21.4c-2.4,0-3.8-1.6-3.8-5s1.4-5,3.8-5c2.4,0,3.8,1.5,3.8,4.9S44.3,21.4,41.9,21.4 M43.4,6.9c-2.5,0-4.3,1.1-5.4,2.8V7.3h-5.3v24.7h5.4v-9c1.2,1.6,2.8,2.6,5.3,2.6c4.9,0,7.8-3.7,7.8-9.4S48.3,6.9,43.4,6.9 M15,18.6c-1.9,0-2.8-1.3-2.8-4c0-2.5,0.8-3.9,2.8-3.9c1.9,0,2.7,1.4,2.7,3.9C17.7,17.3,16.9,18.6,15,18.6 M15.2,0C5.9,0,0,6.4,0,14.7c0,8.9,6.1,14.8,15.4,14.8c2.5,0,5-0.4,7.2-1.2v-3.5c-2.1,0.9-4.6,1.3-7.2,1.3c-6.8,0-11.5-4.1-11.5-11.4C3.9,8,8.3,3.5,15.1,3.5c7.3,0,11.3,4.1,11.3,9.9c0,2.8-0.8,5.2-2.6,5.2c-1,0-1.5-0.6-1.5-2V7.4h-4.7v1.7C16.7,7.6,15.4,7,13.5,7c-3.3,0-6.2,2.7-6.2,7.7c0,5.3,2.7,7.8,6.1,7.8c2,0,3.8-0.9,4.8-2.9c0.6,1.9,2.4,3,4.9,3c4.5,0,7.1-4,7.1-9.3C30.3,5.5,24.2,0,15.2,0'
        var p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        p.setAttribute( 'transform', 'scale( 0.65 ) translate( 50, 650 )')
        p.setAttribute('d', firma )
        p.setAttribute('fill', '#ffffff' )

        try {
            
            gapi.client.drive.files.get({
                apiKey: 'AIzaSyBaLx1pf7T2E0ANuktHCAXDu9bfIpGU4X8',
                fileId: id,
                alt: "media",
                clientId: '287520759621-qhdchtaia0lrmvkqtfgjhsjc5tmgsch8.apps.googleusercontent.com',
              }).then( (res) => {
                
                
                console.log('downloaded')
                var doc = new DOMParser().parseFromString( res.body, "image/svg+xml");
                var poster = doc.querySelector( 'svg' )
                var [ w, h ] = [ poster.getAttribute( 'width' ), poster.getAttribute( 'height' ) ]
                var [ sw, sh ] = [ window.innerWidth, window.innerHeight ]

                var ar = h / w
                var sar = sh / sw
                var ratio = null
                if( ar > sar ) ratio = sh / h
                else ratio = sw / w
                
                var tx = ( sw - w * ratio ) / 2
                var ty = ( sh - h * ratio ) / 2
                poster.style.transform = 'translate3d( ' + tx + 'px, ' + ty + 'px, 0px) scale( ' + ratio + ')'
                poster.appendChild( p )
                document.body.appendChild( poster )
                var activePosters = document.querySelectorAll( 'svg.active' )
                Object.values( activePosters ).forEach( p => p.classList.remove( 'active' ) )
                setTimeout( () => poster.classList.add( 'active' ), 1 )
                this.currentPosterIndex++



              });
          } catch (e) {
            console.error(e);
          }
    }

    switch(){
        if( this.posters.length > this.currentPosterIndex ) this.addPoster( this.posters[ this.currentPosterIndex ].id )
        else console.log( 'no new posters to show' )
    }

    fetch(){
        var api_key = 'AIzaSyC8y5mzWn4GeKgezS4_s1j0OZ4wg5cATVY';
        var folderId = '1ol-3_PGZ226BbCBIGMcQPTZB0f96LX0a';
        var url = "https://www.googleapis.com/drive/v2/files?q='" + folderId + "'+in+parents&key=" + api_key + "&orderBy=modifiedDate asc";
        fetch(url).then(function(response) { return response.json(); }).then( (myJson) => {
            myJson.items.forEach( f => {
                if( f.mimeType == 'image/svg+xml' ) {
                    var add = true
                    this.posters.forEach( p => {  if( p.id == f.id ) add = false } )
                    if( add ) {
                        this.posters.push( { id : f.id, date : f.modifiedDate } ) 
                        console.log( 'added new poster ---> ' + f.id )
                    } else {
                        console.log( 'no new posters to add' )
                    }
                }
            })
            this.switch()
        });

        console.log( 'fetch' )
    }
}
