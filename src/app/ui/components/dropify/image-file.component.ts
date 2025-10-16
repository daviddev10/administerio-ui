import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
// JQuery
declare var $: any;

@Component({
  selector: 'app-image-file',
  standalone: true,
  template: `<input #fileInput type="file" class="dropify" />`,
  styles: ``
})
export class ImageFileComponent implements AfterViewInit, OnDestroy {

  @Input() acceptedFiles = '';          // Ej: 'image/*,.pdf'
  @Input() maxFileSize = 0;             // en MB
  @Input() defaultFile: string | null = null; // archivo inicial
  @Output() onSelectedImage = new EventEmitter<File | null>();

  @ViewChild('fileInput', { static: true }) fileInput!: ElementRef<HTMLInputElement>;
  private dropifyInstance: any;


  private infoMessages = {
    default: 'Click aquí para seleccionar una imagen.',
    replace: 'Arrastre y suelte una imagen o click para remplazar.',
    remove: 'Borrar',
    error: 'Error!, No su pudo agregar la imagen.'
  };

  private errorMessages = {
    fileSize: 'El tamaño del archivo es mayor a ({{ value }}egas).',
    minWidth: 'The image width is too small ({{ value }}}px min).',
    maxWidth: 'The image width is too big ({{ value }}}px max).',
    minHeight: 'The image height is too small ({{ value }}}px min).',
    maxHeight: 'The image height is too big ({{ value }}px max).',
    imageFormat: 'Formato de imagen invalido. ({{ value }} only).',
    fileExtension: 'Extención del archivo invalida. Solo se permite ({{ value }}).'
  }

  ngAfterViewInit(): void {
    const options: any = {
      messages: this.infoMessages,
      error: this.errorMessages
    };
    if (this.acceptedFiles) options.allowedFileExtensions = this.acceptedFiles.split(',');
    if (this.maxFileSize > 0) options.maxFileSize = `${this.maxFileSize}M`;
    if (this.defaultFile) options.defaultFile = this.defaultFile;

    this.dropifyInstance = $('.dropify').dropify(options);

    // Manejo de eventos de Dropify
    this.dropifyInstance.on('change', (event: any) => {
      const file = this.fileInput.nativeElement.files?.[0] || null;
      this.onSelectedImage.emit(file);
    });

    this.dropifyInstance.on('clear', () => {
      this.onSelectedImage.emit(null);
    });
  }

  // Método público para limpiar archivo desde fuera
  clearFile() {
    this.dropifyInstance.clearElement();
  }

  ngOnDestroy(): void {
    if (this.dropifyInstance) {
      // this.dropifyInstance.destroy();
    }
  }

}
