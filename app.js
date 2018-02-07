//This combines jQuery with a ES6 arrow function.  Don't worry, we'll get there.
$(".parentList").on("click", "a", event => {
    event.preventDefault();
    let href = $(event.target).attr("href");
    //this prints the href of the clicked link to the console.
    //I use it to control the content loading.  I left in the log so you could see it.
    console.log(href);
    //now we need to load that page into the frame id'ed div.
    $("#frame").load(href);

})
