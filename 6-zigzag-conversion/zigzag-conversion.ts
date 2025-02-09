function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= numRows) return s; 

    const result: string[] = Array.from({ length: numRows }, () => ''); 

    let row = 0;
    let step = 1; 

    for (const char of s) {
        result[row] += char; 

        if (row === 0) step = 1; 
        else if (row === numRows - 1) step = -1; 

        row += step;
    }

    return result.join('');
}