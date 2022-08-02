import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-readcategories",
    templateUrl: "./readcategories.component.html",
    styleUrls: ["./readcategories.component.css"],
})
export class READcategoriesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    displayedColumns: string[] = [
        "id",
        "categoryName",
        "categoryDescription",
        "actions",
    ];
}
