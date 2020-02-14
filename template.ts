
export default function template(title: string, content: string, initialData: any, isBotRquest = false) {
    const page = `<!DOCTYPE html>
    <html>
      <head>
      <title>${title}</title>
      </head>
      <body style="margin:0">
        <div id="app">${content}</div>
        <script>window.initialData = ${JSON.stringify(initialData)}</script>
        <script src="/client.js" defer></script>
      </body>    
    </html>
  `

  return page;
}