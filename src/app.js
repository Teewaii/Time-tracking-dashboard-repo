
let myData = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

//   const obj = JSON.parse(myData);
const activity = document.querySelectorAll('.act');
// const timeFrame = document.querySelectorAll('.timeFrames');
const day = document.querySelector('.day');
const week = document.querySelector('.week');
const month = document.querySelector('.month');
const period = document.querySelectorAll('.period');
const currentHours = document.querySelectorAll('.hours');


for (i = 0; i < myData.length; i++) {
    activity[i].innerText = myData[i].title
    // currentHours[i].innerText = myData[i].timeframes.daily.current
}

day.addEventListener('click', function () {
    for (i = 0; i < myData.length; i++) {
        currentHours[i].innerText = myData[i].timeframes.daily.current + "hrs";
        period[i].innerHTML = `<p class="period">Yesterday - ${myData[i].timeframes.daily.previous} ` + "hrs";

    }
})


week.addEventListener('click', function () {
    for (i = 0; i < myData.length; i++) {
        currentHours[i].innerText = myData[i].timeframes.weekly.current + "hrs";
        period[i].innerHTML = `<p class="period">Last week - ${myData[i].timeframes.weekly.previous} ` + "hrs";

    }
})

month.addEventListener('click', function () {
    for (i = 0; i < myData.length; i++) {
        currentHours[i].innerText = myData[i].timeframes.monthly.current + "hrs";
        period[i].innerHTML = `<p class="period">Last month - ${myData[i].timeframes.monthly.previous} ` + "hrs";

    }
})

