import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/views/home/home.component";
import { READcategoriesComponent } from "./components/views/readcategories/readcategories.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "CharacterCategories",
        component: READcategoriesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
