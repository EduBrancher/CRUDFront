import { Component, OnInit } from "@angular/core";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
    selector: "app-readcategories",
    templateUrl: "./readcategories.component.html",
    styleUrls: ["./readcategories.component.css"],
})
export class READcategoriesComponent implements OnInit {
    constructor(private service: CategoryService) {}

    ngOnInit(): void {
        this.findAll();
    }

    categories: Category[] = [];

    displayedColumns: string[] = [
        "id",
        "categoryName",
        "categoryDescription",
        "actions",
    ];

    findAll() {
        this.service.findAll().subscribe((response) => {
            console.log(response);
            this.categories = response;
            console.log(this.categories);
        });
    }
}
