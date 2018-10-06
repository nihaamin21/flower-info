$.ajax({
    url: 'https://techkaro-test.herokuapp.com/api/v1/getdata',
    success: function (data) {
        document.querySelector(".flower-img").style = `background-image:url(${data.imageURL})`;
        document.querySelector("#heading-1").innerHTML = `${data.info.heading}`;
        document.querySelector("#para-1").innerHTML = `${data.info.description}`;
        document.querySelector("#heading-2").innerHTML = `${data.sale.heading}`;
        document.querySelector("#para-2").innerHTML = `${data.sale.description}`;

    }
})