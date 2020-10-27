(function () {
    let members = [
        {
            id: "51800867",
            name: "Nguyễn Trọng Hiếu",
            job: "Trưởng nhánh Giải thuật",
            desc: "Khóa 22",
        }, 
        {
            id: "51800636",
            name: "Nguyễn Thành Tiến",
            job: "Trưởng nhánh Ứng dụng",
            desc: "Khóa 22",
        },
        {
            id: "51800308",
            name: "Cao Thị Trúc Quỳnh",
            job: "Trưởng nhánh Mạng",
            desc: "Khóa 22",
        },
        {
            id: "51800144",
            name: "Nguyễn Hoàng Thanh Trúc",
            job: "Ban chủ nhiệm",
            desc: "Khóa 22",
        },
        {
            id: "518H0609",
            name: "Nguyễn Trần Nhật Đức",
            job: "Ban chủ nhiệm",
            desc: "Khóa 22",
        },
        {
            id: "51800723",
            name: "Lê Sỷ Tấn",
            job: "Ban chủ nhiệm",
            desc: "Khóa 22",
        },
        {
            id: "51800796",
            name: "Đoàn Hồng Phương Ngọc",
            job: "Ban chủ nhiệm",
            desc: "Khóa 22",
        },
        {
            id: "518H0501",
            name: "Phạm Minh Hiếu",
            job: "Ban chủ nhiệm",
            desc: "Khóa 22",
        },
        // CTV
        {
            id: "519H0249",
            name: "Phan Lê Thanh Trung",
            job: "Cộng tác viên",
            desc: "Khóa 23",
        },
        {
            id: "51900007",
            name: "Trần Quốc Anh",
            job: "Cộng tác viên",
            desc: "Khóa 23",
        },
        {
            id: "519H0163",
            name: "Trần Trọng Hiếu",
            job: "Cộng tác viên",
            desc: "Khóa 23",
        },
        {
            id: "51900718",
            name: "Tăng Kiến Trung",
            job: "Cộng tác viên",
            desc: "Khóa 23",
        },
        {
            id: "519K0013",
            name: "Nguyễn Định Minh Khôi",
            job: "Cộng tác viên",
            desc: "Khóa 23",
        },
        // Co Van
    ]

    let membersDiv = document.querySelector(".members");
    let owlCarousel = document.createElement("div");

    console.log(membersDiv);
    
    members.forEach((member) => {
        let memberCard = document.createElement("div");

        memberCard.classList.add("members__card");

        for (key in member) {
            let memberCardContainer = document.createElement("div");
            memberCardContainer.classList.add("members__card__container");
            if ( key == "id" ) {
                let img = document.createElement("img");
                img.classList.add("members__card__img");
                img.src = "./assets/profilePlaceholder.jpg";
                memberCardContainer.append(img);
            } else if (key == "name") {
                let name = document.createElement("span");
                name.classList.add("members__card__name");
                name.textContent = member[key];
                memberCardContainer.append(name);
            } else if (key == "job") {
                let job = document.createElement("span");
                job.classList.add("members__card__title");
                job.textContent = member[key];
                memberCardContainer.append(job);
            } else if (key == "desc") {
                let desc = document.createElement("span");
                desc.classList.add("members__card__desc");
                desc.textContent = member[key];
                memberCardContainer.append(desc);
            }
            memberCard.append(memberCardContainer);
        }
        owlCarousel.append(memberCard);
    });

    owlCarousel.classList.add("owl-carousel", "container");

    membersDiv.append(owlCarousel);

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: false,
        center: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },            
            960:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

})();