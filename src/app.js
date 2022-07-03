
// let myData =[
//     {
//       "title": "Work",
//       "timeframes": {
//         "daily":  {
//           "current": 5,
//           "previous": 7
//         },
//         "weekly": {
//           "current": 32,
//           "previous": 36
//         },
//         "monthly": {
//           "current": 103,
//           "previous": 128
//         }
//       }
//     },
//     {
//       "title": "Play",
//       "timeframes": {
//         "daily": {
//           "current": 1,
//           "previous": 2
//         },
//         "weekly": {
//           "current": 10,
//           "previous": 8
//         },
//         "monthly": {
//           "current": 23,
//           "previous": 29
//         }
//       }
//     },
//     {
//       "title": "Study",
//       "timeframes": {
//         "daily": {
//           "current": 0,
//           "previous": 1
//         },
//         "weekly": {
//           "current": 4,
//           "previous": 7
//         },
//         "monthly": {
//           "current": 13,
//           "previous": 19
//         }
//       }
//     },
//     {
//       "title": "Exercise",
//       "timeframes": {
//         "daily": {
//           "current": 1,
//           "previous": 1
//         },
//         "weekly": {
//           "current": 4,
//           "previous": 5
//         },
//         "monthly": {
//           "current": 11,
//           "previous": 18
//         }
//       }
//     },
//     {
//       "title": "Social",
//       "timeframes": {
//         "daily": {
//           "current": 1,
//           "previous": 3
//         },
//         "weekly": {
//           "current": 5,
//           "previous": 10
//         },
//         "monthly": {
//           "current": 21,
//           "previous": 23
//         }
//       }
//     },
//     {
//       "title": "Self Care",
//       "timeframes": {
//         "daily": {
//           "current": 0,
//           "previous": 1
//         },
//         "weekly": {
//           "current": 2,
//           "previous": 2
//         },
//         "monthly": {
//           "current": 7,
//           "previous": 11
//         }
//       }
//     }
//   ]

//   const obj = JSON.parse(myData);
const activity = document.querySelectorAll('.act');

fetch("./src/data.json")

.then(res=>res.json())
.then(data=>{
    activity.forEach(acti=>{
    data.forEach(dat=>{
        
            acti.innerText = dat.title
            // console.log(dat.title)
    })
        // activity.forEach(acti=>{
        // acti.innerText = data[1].title
        //  console.log(data[i].title)
        })
   })

 
// activity.data
// })

// const activity = document.querySelectorAll('.act');


//     for(i=0; i<=myData.length; i++){ 
//         activity.forEach(acti=>{
//        acti.innerText=myData[i].title

// })




// for(let i=0; i<Obj.length; i++){

