const JAN_LIST = [
    {   
        name: 'Trần Văn A',
        id: 'JAN0001',
        gen: 'Nam',
        num: '0123456789',
        addr: '123 Đường số 4, Phường 5, Quận 6',
       
    },
    {
        name: 'Nguyễn Thị B',
        id: 'JAN0002',
        gen: 'Nữ',
        num: '0987654321',
        addr: '234 Đường số 5, Phường 6, Quận 7',
       
    },
    {
        name: 'Lê Anh C',
        id: 'JAN0003',
        gen: 'Nam',
        num: '011223333',
        addr: '567 Đường số 8, Phường 7, Quận 8',
        
    },
    {
        name: 'Lê Anh D',
        id: 'JAN0004',
        gen: 'Nữ',
        num: '011235345',
        addr: '789 Đường số 10, Phường 11, Quận 9',
       
    },
    {
        name: 'Lê Anh E',
        id: 'JAN0005',
        gen: 'Nữ',
        num: '01186789',
        addr: '1011 Đường số 12, Phường 13, Quận 10',
        
    },
    {
        name: 'Lê Anh F',
        id: 'JAN0006',
        gen: 'Nam',
        num: '01167667',
        addr: '1112 Đường số 13, Phường 14, Quận 11',
        
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0007',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
       
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0008',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
        
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0009',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
        
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0010',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
        
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0011',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
        
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0012',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
        
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0013',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
       
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0014',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
       
    },
    {
        name: 'Lê Thị G',
        id: 'JAN0015',
        gen: 'Nam',
        num: '011674564',
        addr: '1113 Đường số 14, Phường 15, Quận 12',
       
    }
];
const ROWS_PER_PAGE = 10;
function renderTable(start) {
    let table = document.querySelector('.task-detail-table');
    let html = '';
    //Header
    html += `<tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Mã số</th>
                <th>Giới tính</th>
                <th>SĐT</th>
                <th>Địa chỉ</th>
                <th>Phân công</th>
            </tr>`;
    //Detail rows
    const end = start + ROWS_PER_PAGE; //Display 10 rows per page
    for (let i = start; i < end && i < JAN_LIST.length; i++) {
        const jan = JAN_LIST[i];
        html += `<tr>
            <td>${i + 1}</td>
            <td>${jan.name}</td>
            <td>${jan.id}</td>
            <td>${jan.gen}</td>
            <td>${jan.num}</td>
            <td>${jan.addr}</td>`
            html += `<td><input type="checkbox" class="form-check-input checkbox"></td>
        </tr > `;
    }
    table.innerHTML = html;

    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (end >= JAN_LIST.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        nextBtn.onclick = function () {
            renderTable(end);
        };
    }
}


renderTable(0);