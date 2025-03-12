export type Strip_Row = { height: number, cols: number[] };
export type Box = { url: string, alt: string } | false;

export class Strip { // Comic strip
    public boxes: Box[];
    public rows: Strip_Row[];

    public instanced = false;
    public element: HTMLElement = document.createElement('div');

    public constructor(boxes: Box[], rows: Strip_Row[]) {
        this.boxes = boxes;
        this.rows = rows;
    }

    public createStrip(): void {
        this.element.classList.add('strip');
        this.element.style.gridTemplateRows = `${this.rows.map(row => `${row.height}px`).join(' ')}`;

        let i = 0;
        for (const row in this.rows) {
            const rowElement = document.createElement('div');
            rowElement.classList.add('strip-row');
            rowElement.style.gridTemplateColumns = `${this.rows[row].cols.map(col => `${col}%`).join(' ')}`;

            for (const _ in this.rows[row].cols) {
                const boxElement = document.createElement('div');
                boxElement.classList.add('strip-box');
                boxElement.style.height = `${this.rows[row].height}px`;

                const box = this.boxes[i];
                if (box) {
                    const imgElement = document.createElement('img');
                    imgElement.src = box.url;
                    imgElement.alt = box.alt;

                    boxElement.appendChild(imgElement);
                }
                i += 1;

                rowElement.appendChild(boxElement);
            }

            this.element.appendChild(rowElement);
        }

        document.body.appendChild(this.element);
        this.instanced = true;
    }
}
