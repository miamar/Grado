var getsession = window.sessionStorage.getItem('bannerSocialProof');
console.log(getsession)

if(!getsession){
    $('#bannerSocialProof').css('display', 'flex')
    console.log('BANNER VISIBILE')
} else {
    $('#bannerSocialProof').css('display', 'none')
    console.log('BANNER NASCOSTO')
}


$('#bannerSocialProof i').on('click', function() {
    $(this).parent().parent().remove()
    sessionStorage.setItem('bannerSocialProof', 'false');
})
$('#bannerSocialProof a').on('click', function () {
    $(this).parent().parent().remove()
    sessionStorage.setItem('bannerSocialProof', 'false');
    console.log('BANNER ELIMINATO!')
})
