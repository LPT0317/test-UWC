const AREA_LIST = [
    {
        id: 'Quận 1',
        no_mcp: '37',
        no_vehicle: '13',
        no_staff: '46',
    },
    {
        id: 'Quận 3',
        no_mcp: '32',
        no_vehicle: '16',
        no_staff: '45',
    },
    {
        id: 'Quận 4',
        no_mcp: '35',
        no_vehicle: '14',
        no_staff: '39',
    },
    {
        id: 'Quận 5',
        no_mcp: '40',
        no_vehicle: '20',
        no_staff: '48',
    },
    {
        id: 'Quận 6',
        no_mcp: '37',
        no_vehicle: '12',
        no_staff: '45',
    },
    {
        id: 'Quận 7',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận 8',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận Gò Vấp',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận Củ Chi',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'TP Thủ Đức',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận 12',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận 10',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận 9',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận 2',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    },
    {
        id: 'Quận Bình Tân',
        no_mcp: '40',
        no_vehicle: '19',
        no_staff: '46',
    }
];
const ROWS_PER_PAGE = 10;
function renderTable(start) {
    let table = document.querySelector('.task-detail-table');
    let html = '';
    //Header
    html += `<tr>
                <th>STT</th>
                <th>Khu vực</th>
                <th>Số điểm thu gom</th>
                <th>Số phương tiện</th>
                <th>Số nhân viên</th>
            </tr>`;
    //Detail rows
    const end = start + ROWS_PER_PAGE; //Display 10 rows per page
    for (let i = start; i < end && i < AREA_LIST.length; i++) {
        const area = AREA_LIST[i];
        html += `<tr>
            <td>${i + 1}</td>
            <td>${area.id}</td>
            <td>${area.no_mcp}</td>
            <td>${area.no_vehicle}</td>
            <td>${area.no_mcp}</td>`
        html += `<td><button class="btn btn-success">Chọn</button></td>
        </tr > `;
    }
    table.innerHTML = html;

    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (start === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        prevBtn.onclick = function () {
            renderTable(start - ROWS_PER_PAGE);
        };
    }
    if (end >= AREA_LIST.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        nextBtn.onclick = function () {
            renderTable(end);
        };
    }
}


renderTable(0);