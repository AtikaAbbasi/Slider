var imges = [

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s",
  "https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg",
  "https://media.istockphoto.com/id/2111424340/photo/orange-gerbera-flower-head-macro-top-view.jpg?b=1&s=612x612&w=0&k=20&c=bIfhCQvfogD8ELzBPowmIf0MJU2HrUzSj7fK1fkVK0o=",
  "https://wallpapers.com/images/featured/flower-pictures-unpxbv1q9kxyqr1d.jpg",
  "https://t4.ftcdn.net/jpg/01/76/63/21/360_F_176632178_MMayQcglMlXTUmUKPpWCD5Ol4HgmtyQ5.jpg",

]

var inn = 0

// if(inn === imges.length-1){

//     function next (){
//         var curtimg = document.getElementById("sliderimg")
//         if (curtimg === imges.length - 1) {
//             inn = 0;
//           } else {
//             inn++;
//           }
//           curtimg.src = imges[inn];
//         }
//  }


function next (){
    var curtimg = document.getElementById("sliderimg")
    if (inn === imges.length - 1) {
        inn = 0;
      } else {
        inn++;
      }
      curtimg.src = imges[inn];
    }

    function pre(){
        var curtimg = document.getElementById("sliderimg")
        if (inn === 0) {
            inn = imges.length - 1;
          } else {
            inn--;
          }
          curtimg.src = imges[inn];
        }

       

function img1(){
    document.getElementById("sliderimg").src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s'
    
   
}

function img2(){
    document.getElementById("sliderimg").src='https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg'
}

function img3(){
  document.getElementById("img3").className += " border"
    document.getElementById("sliderimg").src='https://media.istockphoto.com/id/2111424340/photo/orange-gerbera-flower-head-macro-top-view.jpg?b=1&s=612x612&w=0&k=20&c=bIfhCQvfogD8ELzBPowmIf0MJU2HrUzSj7fK1fkVK0o='
}

function img4(){
    document.getElementById("sliderimg").src='https://wallpapers.com/images/featured/flower-pictures-unpxbv1q9kxyqr1d.jpg'
}

function img5(){
    document.getElementById("sliderimg").src='https://t4.ftcdn.net/jpg/01/76/63/21/360_F_176632178_MMayQcglMlXTUmUKPpWCD5Ol4HgmtyQ5.jpg'
    
}



