import { Component, ElementRef, AfterViewChecked, OnInit } from "@angular/core";
declare function initialRelativeLoad(): any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewChecked {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewChecked(): void {
    var isCustomExisted = document.getElementById("customJavascript");

    var _script = document.createElement("script");
    _script.type = "text/javascript";
    _script.id = "customJavascript";
    _script.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(_script);
  }

  ngOnInit() {}
}
