'use strict';

function main(){
    $("#js-shopping-list-form").submit(function(e){
        e.preventDefault();
        let str = $("#shopping-list-entry").val();  
        $(".shopping-list").append(`<li>
        <span class="shopping-item">${str}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

    $(".shopping-list").on("click", ".shopping-item-toggle", function (e){
        e.preventDefault();
        console.log(this);
        let thisStr = $(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
        console.log(thisStr);
        //$(".shopping-item").attr("name", )
    });

    $(".shopping-list").on("click", ".shopping-item-delete", function (e){
        e.preventDefault();
        $(this).parent().parent().remove();
    });
}

$(main);