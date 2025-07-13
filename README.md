# Quimica-univalle
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malla Curricular de Química</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #6a0dad, #4b0082);
            color: white;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 20px 0;
            margin-bottom: 30px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .controls {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        button {
            background: #8a2be2;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        button:hover {
            background: #9932cc;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .stats {
            background: rgba(106, 13, 173, 0.5);
            padding: 15px;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        .stat-card {
            text-align: center;
            padding: 10px;
            min-width: 150px;
        }
        
        .stat-card h3 {
            font-size: 2rem;
            margin-bottom: 5px;
            color: #ffd700;
        }
        
        .semester-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .semester {
            background: rgba(75, 0, 130, 0.7);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s;
        }
        
        .semester:hover {
            transform: translateY(-5px);
        }
        
        .semester-header {
            text-align: center;
            padding-bottom: 15px;
            margin-bottom: 15px;
            border-bottom: 2px solid #9370db;
        }
        
        .semester-header h2 {
            font-size: 1.8rem;
            color: #ffd700;
        }
        
        .semester-header p {
            font-size: 1.2rem;
            color: #e6e6fa;
        }
        
        .courses {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 12px;
        }
        
        .course {
            background: #9370db;
            border-radius: 10px;
            padding: 15px;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .course:hover {
            background: #ab82ff;
            transform: translateY(-3px);
        }
        
        .course.approved {
            background: linear-gradient(135deg, #4caf50, #2e7d32);
        }
        
        .course.blocked {
            background: #5d5d5d;
            cursor: not-allowed;
            opacity: 0.7;
        }
        
        .course.approved::after {
            content: "✓";
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .course-code {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 5px;
            color: #ffd700;
        }
        
        .course-credits {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.3);
            padding: 3px 8px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .prerequisites {
            font-size: 0.8rem;
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px dashed rgba(255, 255, 255, 0.3);
            color: #e6e6fa;
        }
        
        .prerequisites ul {
            padding-left: 18px;
            margin-top: 5px;
        }
        
        .prerequisites li {
            margin-bottom: 3px;
        }
        
        .legend {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .legend-color {
            width: 20px;
            height: 20px;
            border-radius: 4px;
        }
        
        .legend-available {
            background: #9370db;
        }
        
        .legend-approved {
            background: linear-gradient(135deg, #4caf50, #2e7d32);
        }
        
        .legend-blocked {
            background: #5d5d5d;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #e6e6fa;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .semester-container {
                grid-template-columns: 1fr;
            }
            
            .controls {
                flex-direction: column;
                align-items: center;
            }
            
            .stats {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Malla Curricular de Química</h1>
            <p>Haz clic en los ramos para aprobarlos y ver cómo se desbloquean los siguientes cursos</p>
        </header>
        
        <div class="controls">
            <button id="approveAll">Aprobar Todo</button>
            <button id="resetAll">Reiniciar Todo</button>
            <button id="approveSemester1">Aprobar Semestre 1</button>
            <button id="approveSemester2">Aprobar Semestre 2</button>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <h3 id="approvedCount">0</h3>
                <p>Ramos Aprobados</p>
            </div>
            <div class="stat-card">
                <h3 id="totalCredits">0</h3>
                <p>Créditos Obtenidos</p>
            </div>
            <div class="stat-card">
                <h3>156</h3>
                <p>Créditos Totales</p>
            </div>
            <div class="stat-card">
                <h3 id="progress">0%</h3>
                <p>Progreso</p>
            </div>
        </div>
        
        <div class="semester-container" id="mallaContainer">
            <!-- Los semestres se generarán con JavaScript -->
        </div>
        
        <div class="legend">
            <div class="legend-item">
                <div class="legend-color legend-available"></div>
                <span>Disponible</span>
            </div>
            <div class="legend-item">
                <div class="legend-color legend-approved"></div>
                <span>Aprobado</span>
            </div>
            <div class="legend-item">
                <div class="legend-color legend-blocked"></div>
                <span>Bloqueado</span>
            </div>
        </div>
        
        <footer>
            <p>Malla Curricular Interactiva - Carrera de Química</p>
        </footer>
    </div>

    <script>
        // Datos completos de la malla curricular
        const mallaData = [
            {
                semester: 1,
                credits: 17,
                courses: [
                    { id: "116009C", name: "Introducción a las ciencias naturales", credits: 4, prerequisites: [] },
                    { id: "106002C", name: "Introducción a la experimentación científica", credits: 3, prerequisites: [] },
                    { id: "111001C", name: "Matemática fundamental", credits: 4, prerequisites: [] },
                    { id: "LENG1", name: "Lenguaje y comunicación I", credits: 2, prerequisites: [] },
                    { id: "EVS", name: "Estilos de vida saludable", credits: 2, prerequisites: [] },
                    { id: "FSC", name: "Formación social y ciudadana", credits: 2, prerequisites: [] }
                ]
            },
            {
                semester: 2,
                credits: 17,
                courses: [
                    { id: "116013C", name: "Química general", credits: 4, prerequisites: ["116009C", "106002C", "111001C"] },
                    { id: "111013C", name: "Cálculo I", credits: 3, prerequisites: ["111001C"] },
                    { id: "102052C", name: "Biología general", credits: 4, prerequisites: ["116009C", "106002C"] },
                    { id: "106001C", name: "Física fundamental I", credits: 4, prerequisites: ["116009C", "106002C", "111013C"] },
                    { id: "LENG2", name: "Lenguaje y comunicación II", credits: 2, prerequisites: ["LENG1"] }
                ]
            },
            {
                semester: 3,
                credits: 17,
                courses: [
                    { id: "116015C", name: "Química analítica", credits: 3, prerequisites: ["116013C", "111001C"] },
                    { id: "111014C", name: "Cálculo II", credits: 3, prerequisites: ["111013C"] },
                    { id: "106008C", name: "Física II", credits: 4, prerequisites: ["111013C", "106001C"] },
                    { id: "111002C", name: "Introducción al modelamiento matemático", credits: 3, prerequisites: ["111013C", "106001C", "102052C", "116013C"] },
                    { id: "116003C", name: "Experimentación científica", credits: 2, prerequisites: ["106002C", "116013C", "116015C"] },
                    { id: "LENG3", name: "Lenguaje y comunicación III", credits: 2, prerequisites: ["LENG2"] }
                ]
            },
            {
                semester: 4,
                credits: 18,
                courses: [
                    { id: "116002C", name: "Estructura atómica y enlace", credits: 3, prerequisites: ["111014C", "106008C", "116013C", "111032C"] },
                    { id: "111032C", name: "Matemáticas especiales I", credits: 3, prerequisites: ["111014C"] },
                    { id: "106016C", name: "Física III", credits: 4, prerequisites: ["111014C", "106008C"] },
                    { id: "116018C", name: "Análisis intrumental I", credits: 3, prerequisites: ["116015C", "116002C"] },
                    { id: "116028C", name: "Laboratorio de química analítica", credits: 3, prerequisites: ["116015C", "116003C"] },
                    { id: "116023C", name: "Estadística química", credits: 2, prerequisites: ["106003C", "116015C", "116018C"] }
                ]
            },
            {
                semester: 5,
                credits: 18,
                courses: [
                    { id: "116024C", name: "Fisicoquímica I", credits: 3, prerequisites: ["116002C", "111032C", "106016C"] },
                    { id: "111036C", name: "Matemáticas especiales II", credits: 3, prerequisites: ["111032C"] },
                    { id: "116039C", name: "Química orgánica I", credits: 3, prerequisites: ["116002C"] },
                    { id: "116031C", name: "Química inorgánica I", credits: 3, prerequisites: ["116002C"] },
                    { id: "116021C", name: "Análisis instrumental II", credits: 3, prerequisites: ["116018C", "116002C", "116024C"] },
                    { id: "116027C", name: "Laboratorio de análisis instrumental", credits: 3, prerequisites: ["116018C", "116021C"] }
                ]
            },
            {
                semester: 6,
                credits: 17,
                courses: [
                    { id: "116025C", name: "Fisicoquímica II", credits: 3, prerequisites: ["116024C", "111036C"] },
                    { id: "116040C", name: "Química orgánica II", credits: 3, prerequisites: ["116039C"] },
                    { id: "116032C", name: "Química inorgánica II", credits: 3, prerequisites: ["116031C", "116024C"] },
                    { id: "116034C", name: "Laboratorio de fisicoquímica I", credits: 2, prerequisites: ["116024C"] },
                    { id: "116036C", name: "Laboratorio de química orgánica I", credits: 2, prerequisites: ["116039C", "116027C"] },
                    { id: "116029C", name: "Laboratorio de química inorgánica I", credits: 2, prerequisites: ["116031C", "116027C"] },
                    { id: "LENG4", name: "Lenguaje y comunicación IV", credits: 2, prerequisites: ["LENG3"] }
                ]
            },
            {
                semester: 7,
                credits: 18,
                courses: [
                    { id: "116043C", name: "Bioquímica", credits: 5, prerequisites: ["116025C", "116040C", "116027C"] },
                    { id: "116057C", name: "Química macromolecular", credits: 3, prerequisites: ["116040C", "116032C"] },
                    { id: "116055C", name: "Seminario", credits: 1, prerequisites: ["116025C", "116040C", "116032C"] },
                    { id: "116035C", name: "Laboratorio de fisicoquímica II", credits: 2, prerequisites: ["116025C", "116034C"] },
                    { id: "116037C", name: "Laboratorio de química orgánica II", credits: 2, prerequisites: ["116040C", "116027C", "116036C"] },
                    { id: "116030C", name: "Laboratorio de química inorgánica II", credits: 2, prerequisites: ["116032C", "116027C", "116029C"] },
                    { id: "OPT1", name: "Optativa en química I", credits: 3, prerequisites: [] }
                ]
            },
            {
                semester: 8,
                credits: 20,
                courses: [
                    { id: "BIOMOL", name: "Biología molecular", credits: 3, prerequisites: ["116043C"] },
                    { id: "116033C", name: "Identificación de compuestos", credits: 3, prerequisites: ["116040C", "116032C", "116021C"] },
                    { id: "116054C", name: "Química verde y ambiental", credits: 3, prerequisites: ["116040C", "116032C"] },
                    { id: "OPT2", name: "Optativa en química II", credits: 3, prerequisites: [] },
                    { id: "ELE1", name: "Electiva profesional I", credits: 3, prerequisites: [] },
                    { id: "ELE2", name: "Electiva profesional II", credits: 3, prerequisites: [] },
                    { id: "ART", name: "Artístico-humanístico", credits: 2, prerequisites: [] }
                ]
            },
            {
                semester: 9,
                credits: 7,
                courses: [
                    { id: "TG1", name: "Trabajo de grado I", credits: 7, prerequisites: ["BIOMOL", "116033C"] }
                ]
            },
            {
                semester: 10,
                credits: 7,
                courses: [
                    { id: "TG2", name: "Trabajo de grado II", credits: 7, prerequisites: ["TG1"] }
                ]
            }
        ];

        // Estado de aprobación de los cursos
        let approvedCourses = {};
        
        // Función para renderizar la malla curricular
        function renderMalla() {
            const container = document.getElementById('mallaContainer');
            container.innerHTML = '';
            
            mallaData.forEach(semesterData => {
                const semesterEl = document.createElement('div');
                semesterEl.className = 'semester';
                
                semesterEl.innerHTML = `
                    <div class="semester-header">
                        <h2>Semestre ${semesterData.semester}</h2>
                        <p>Créditos: ${semesterData.credits}</p>
                    </div>
                    <div class="courses"></div>
                `;
                
                const coursesContainer = semesterEl.querySelector('.courses');
                
                semesterData.courses.forEach(course => {
                    const courseEl = document.createElement('div');
                    courseEl.className = 'course';
                    courseEl.dataset.id = course.id;
                    
                    // Comprobar si el curso está aprobado
                    const isApproved = approvedCourses[course.id] || false;
                    
                    // Comprobar si el curso está bloqueado (prerrequisitos no cumplidos)
                    let isBlocked = false;
                    if (!isApproved) {
                        isBlocked = course.prerequisites.some(prereq => !approvedCourses[prereq]);
                    }
                    
                    if (isApproved) {
                        courseEl.classList.add('approved');
                    } else if (isBlocked) {
                        courseEl.classList.add('blocked');
                    }
                    
                    // Construir lista de prerrequisitos
                    let prereqList = '';
                    if (course.prerequisites.length > 0) {
                        prereqList = `<div class="prerequisites">Prerrequisitos:<ul>${course.prerequisites.map(prereq => `<li>${getCourseName(prereq)}</li>`).join('')}</ul></div>`;
                    }
                    
                    courseEl.innerHTML = `
                        <div class="course-code">${course.id}</div>
                        <div class="course-credits">${course.credits} CR</div>
                        <div class="course-name">${course.name}</div>
                        ${prereqList}
                    `;
                    
                    // Añadir evento de clic si no está bloqueado
                    if (!isBlocked && !isApproved) {
                        courseEl.addEventListener('click', () => toggleCourseApproval(course.id));
                    }
                    
                    coursesContainer.appendChild(courseEl);
                });
                
                container.appendChild(semesterEl);
            });
            
            updateStats();
        }
        
        // Obtener nombre del curso por ID
        function getCourseName(courseId) {
            for (const semester of mallaData) {
                for (const course of semester.courses) {
                    if (course.id === courseId) {
                        return course.name;
                    }
                }
            }
            return courseId;
        }
        
        // Alternar estado de aprobación de un curso
        function toggleCourseApproval(courseId) {
            approvedCourses[courseId] = !approvedCourses[courseId];
            renderMalla();
        }
        
        // Actualizar estadísticas
        function updateStats() {
            const approvedCount = Object.values(approvedCourses).filter(Boolean).length;
            document.getElementById('approvedCount').textContent = approvedCount;
            
            // Calcular créditos totales
            let totalCredits = 0;
            for (const semester of mallaData) {
                for (const course of semester.courses) {
                    if (approvedCourses[course.id]) {
                        totalCredits += course.credits;
                    }
                }
            }
            document.getElementById('totalCredits').textContent = totalCredits;
            
            // Calcular progreso
            const progress = Math.min(100, Math.round((totalCredits / 156) * 100));
            document.getElementById('progress').textContent = `${progress}%`;
        }
        
        // Aprobar todos los cursos
        function approveAllCourses() {
            mallaData.forEach(semester => {
                semester.courses.forEach(course => {
                    approvedCourses[course.id] = true;
                });
            });
            renderMalla();
        }
        
        // Reiniciar todos los cursos
        function resetAllCourses() {
            approvedCourses = {};
            renderMalla();
        }
        
        // Aprobar cursos de un semestre específico
        function approveSemester(semesterNum) {
            mallaData[semesterNum - 1].courses.forEach(course => {
                approvedCourses[course.id] = true;
            });
            renderMalla();
        }
        
        // Inicializar eventos
        document.getElementById('approveAll').addEventListener('click', approveAllCourses);
        document.getElementById('resetAll').addEventListener('click', resetAllCourses);
        document.getElementById('approveSemester1').addEventListener('click', () => approveSemester(1));
        document.getElementById('approveSemester2').addEventListener('click', () => approveSemester(2));
        
        // Inicializar la malla
        renderMalla();
    </script>
</body>
</html>
