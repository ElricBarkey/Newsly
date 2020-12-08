
AWS.config.update({
    region: "us-west-2",
    // The endpoint .
    endpoint: 'https://dynamodb.us-west-2.amazonaws.com',

    //accessKeyId and secretAccessKey are currently hard coded

    accessKeyId: 'yourAwsKeyHere' ,//AWS_ACCESS_KEY
    secretAccessKey: 'yourSecretKeyHere'//AWS_SECRET_ACCESS_KEY


});



var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

function readItem() {

    //grab the trends table
    let params = {
        TableName: "Trends"
    };

    let count = 0;
    docClient.scan(params).eachPage((err, data, done) => {
        if (data != null) {
            for (let index = 0; index < data.Items.length; index++) {
                const element = data.Items[index];
                count++;

                //These are used for testing data pulled from the database

                //console.log(" " + count + " " + index + " " + JSON.stringify(element));
                // console.log("Audio url " + element.audio)
                //console.log("Image url " + element.image)
                //console.log("Location " + element.countries)
                //console.log("URL " + element.URL)
                //console.log('\n')
                // console.log('\n')
                //console.log('\n')


                //create a div with the id of trending
                let trendingDiv = document.createElement("div");

                //add id
                trendingDiv.id = "trending"+ count;
                trendingDiv.classList.add("col-lg-4");

                //append divs to larger div that will hold all of them
                document.getElementById("rows").append(trendingDiv);

                //create a img tag
                let newImage =  document.createElement("img");

                //accounting for any trend without a image
                if (element.image === null || element.image === true){
                    newImage.src = "../assets/img/elice-moore-E--AUpYXbjM-unsplash.jpg"
                }else{//else add the articles image
                    newImage.src = element.image;
                    newImage.addEventListener("click", getPlayer)
                }

                //add image to trending div
                document.getElementById("trending"+ count).append(newImage);

                //create a paragraph tag to contain the url
                //create/add text to url
                let newUrl =  document.createElement("a");
                newUrl.target = "_blank";
                newUrl.href = element.URL;
                newUrl.innerHTML ='<br>'+ element.title;

                //add the url to the trending div
                document.getElementById("trending" + count).append(newUrl);

                //function for adding audio, image and article title to player
                function getPlayer(){
                    document.getElementById("audioPlayer").src = element.audio;
                    document.getElementById("image").src = element.image;
                    document.getElementById("name").innerHTML = element.title;
                }



            }

            $(
                function() {
                    var aud = $('audio')[0];
                    //pause function
                    $('.play-pause').on('click', function () {
                        if (aud.paused) {
                            aud.play();
                            $('.play-pause').removeClass('icon-play');
                            $('.play-pause').addClass('icon-stop');
                        } else {
                            aud.pause();
                            $('.play-pause').removeClass('icon-stop');
                            $('.play-pause').addClass('icon-play');
                        }
                    })

                    //fast forward by 10 seconds
                    $('.forward').on('click', function () {
                        aud.currentTime += 10.0;
                    })

                    aud.ontimeupdate = function () {
                        $('.progressBar').css('width', aud.currentTime / aud.duration * 100 + '%')
                    }

                    $('.playable').on("click", function () {
                        aud.src = '' + $(this).attr('id');
                        document.getElementById("name").innerHTML = element.title;
                        $('.play-pause').click();
                    })
                    //VOLUME BAR
                    //volume bar event

                    let volumeDrag = false;
                    $('.volume').on('mousedown', function (e) {
                        volumeDrag = true;
                        aud.muted = false;
                        $('.sound').removeClass('muted');
                        updateVolume(e.pageX);
                    });
                    $(document).on('mouseup', function (e) {
                        if (volumeDrag) {
                            volumeDrag = false;
                            updateVolume(e.pageX);
                        }
                    });
                    /* Volume control */
                    $(document).on('mousemove', function (e) {
                        if (volumeDrag) {
                            updateVolume(e.pageX);
                        }
                    });
                    let updateVolume = function (x, vol) {
                        let volume = $('.volume');
                        let percentage;
                        //if only volume have specificed
                        //then direct update volume
                        if (vol) {
                            percentage = vol * 100;
                        } else {
                            let position = x - volume.offset().left;
                            percentage = 100 * position / volume.width();
                        }

                        if (percentage > 100) {
                            percentage = 100;
                        }
                        if (percentage < 0) {
                            percentage = 0;
                        }

                        //update volume bar and video volume
                        $('.volumeBar').css('width', percentage + '%');
                        aud.volume = percentage / 100;

                        //change sound icon based on volume
                        if (aud.volume === 0) {
                            $('.sound').removeClass('sound2').addClass('muted');
                        } else if (aud.volume > 0.5) {
                            $('.sound').removeClass('muted').addClass('sound2');
                        } else {
                            $('.sound').removeClass('muted').removeClass('sound2');
                        }
                    };
                    $(".progress").on("click", function (e) {
                        var offset = $(this).offset();
                        var left = (e.pageX - offset.left);
                        var totalWidth = $(".progress").width();
                        var percentage = (left / totalWidth);
                        var vidTime = aud.duration * percentage;
                        aud.currentTime = vidTime;
                        console.log(aud.currentTime);

                    })
                })
        }
        done();
    });





}
