const REAR_LIST = [
    {
        name: 'Trần Văn A',
        id: 'COL0001',
        sex: 'Nam',
        phone: '012345670',
        vehicle: '51A-12340',
    },
    {
        name: 'Nguyễn Thị B',
        id: 'COL0002',
        sex: 'Nữ',
        phone: '012345671',
        vehicle: '51A-12341',
    },
    {
        name: 'Lê Văn C',
        id: 'COL0003',
        sex: 'Nam',
        phone: '012345672',
        vehicle: '51A-12342',
    },
    {
        name: 'Trần Văn B',
        id: 'COL0004',
        sex: 'Nam',
        phone: '012345673',
        vehicle: '51A-12343',
    },
    {
        name: 'Nguyễn Thị A',
        id: 'COL0005',
        sex: 'Nữ',
        phone: '012345674',
        vehicle: '51A-12344',
    },
    {
        name: 'Lê Văn A',
        id: 'COL0006',
        sex: 'Nam',
        phone: '012345675',
        vehicle: '51A-12345',
    },
    {
        name: 'Nguyễn Thị C',
        id: 'COL0007',
        sex: 'Nữ',
        phone: '012345676',
        vehicle: '51A-12346',
    },
    {
        name: 'Trần Văn C',
        id: 'COL0008',
        sex: 'Nam',
        phone: '012345677',
        vehicle: '51A-12347',
    },
    {
        name: 'Lê Văn D',
        id: 'COL0009',
        sex: 'Nam',
        phone: '012345678',
        vehicle: '51A-12348',
    },
    {
        name: 'Nguyễn Thị D',
        id: 'COL0010',
        sex: 'Nữ',
        phone: '012345679',
        vehicle: '51A-12349',
    },
    {
        name: 'Lê Văn F',
        id: 'COL0011',
        sex: 'Nam',
        phone: '012345690',
        vehicle: '51A-12310',
    },
    {
        name: 'Nguyễn Thị E',
        id: 'COL0012',
        sex: 'Nữ',
        phone: '012345691',
        vehicle: '51A-12311',
    },
    {
        name: 'Trần Văn F',
        id: 'COL0013',
        sex: 'Nam',
        phone: '012345692',
        vehicle: '51A-12312',
    },
    {
        name: 'Lê Văn G',
        id: 'COL0014',
        sex: 'Nam',
        phone: '012345693',
        vehicle: '51A-12313',
    },
    {
        name: 'Trần Văn H',
        id: 'COL0015',
        sex: 'Nam',
        phone: '012345694',
        vehicle: '51A-12315',
    }
];
const ROWS_PER_PAGE = 10;
function renderTable(start) {
    let table = document.querySelector('.task-detail-table');
    let html = '';
    //Header
    html += `<tr>
                <th>STT</th>
                <th>Họ và tên tài xế</th>
                <th>Mã nhân viên</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Xe được bàn giao</th>
                <th>Phân công</th>
            </tr>`;
    //Detail rows
    const end = start + ROWS_PER_PAGE; //Display 10 rows per page
    for (let i = start; i < end && i < REAR_LIST.length; i++) {
        const rear = REAR_LIST[i];
        html += `<tr>
            <td>${i + 1}</td>
            <td>${rear.name}</td>
            <td>${rear.id}</td>
            <td>${rear.sex}</td>
            <td>${rear.phone}</td>
            <td>${rear.vehicle}</td>`
        html += `<td><input type="checkbox" class="form-check-input checkbox"></td>
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
    if (end >= REAR_LIST.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        nextBtn.onclick = function () {
            renderTable(end);
        };
    }
}


renderTable(0);