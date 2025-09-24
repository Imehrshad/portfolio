export async function downloadFile(fileName: string) {
    const link = document.createElement("a");
    link.href = `/${fileName}`; // public/ folder files are served at root
    link.download = fileName;   // sets the download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }