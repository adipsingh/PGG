import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
    MatFormFieldModule, MatInputModule, MatSelectModule, MatListModule,
    MatCheckboxModule, MatDatepickerModule
} from '@angular/material';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

@NgModule({
    declarations: [
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatListModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule,
        MatRippleModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatListModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule,
        MatRippleModule
    ]
})
export class SharedModule { }
