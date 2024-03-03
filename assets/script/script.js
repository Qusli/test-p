// switch title to block "switch-list"
(function() {
    let switch_list__item = document.querySelectorAll(".switch-list__item");
    let question_list = document.querySelectorAll(".question-list")
    switch_list__item.forEach((el) => {
        el.addEventListener("click", (event) => {
            switch_list__item.forEach((title) => {
                console.log(event.target.getAttribute("data-switch"))
                if(event.target.getAttribute("data-switch") === title.getAttribute("data-switch")) {
                    question_list.forEach((list) => {
                        if(
                            event.target.getAttribute("data-switch") === list.getAttribute("data-switch")
                        ){
                            title.classList.add("active");
                            list.classList.remove("hidden");
                        }
                    })
                } else {
                    question_list.forEach((list) => {
                        if(
                            event.target.getAttribute("data-switch") !== list.getAttribute("data-switch")
                        ){
                            title.classList.remove("active");
                            list.classList.add("hidden");
                        }
                    })
                }
            })
        })
    })
}());

// open content to block "question-list__item"
(function() {
    let question_list__item = document.querySelectorAll(".question-list__item");
    question_list__item.forEach((el) => {
        el.addEventListener("click", function() {
            if(this.classList.contains("show")) {
                this.classList.remove("show")
            } else {
                this.classList.add("show")
            }
        })
    })
}());