import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  
  isDragOver:boolean = false;
  imageSrc: string | ArrayBuffer | null = null;

  ngOnInit(): void {

  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    
    this.isDragOver = true;
  }
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    console.log(event);
    
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      // Aquí puedes manejar los archivos soltados, por ejemplo, imprimir sus nombres
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (this.isValidFileType(file)) {
          this.displayImage(file); // Llamar a la función para mostrar la imagen
        } else {
          console.log('Archivo no válido:', file.name);
        }
      }
    }
    
    this.isDragOver = false;
  }

  isValidFileType(file: File): boolean {
    return file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
  }

  displayImage(file: File) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      this.imageSrc = event.target?.result!;
    };
    reader.readAsDataURL(file);
  }
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (this.isValidFileType(file)) {
        this.displayImage(file);
      } else {
        console.log('Archivo no válido:', file.name);
      }
    }
  }
}
