import { connection } from "../connection.js";

export async function findAll() {
  const teachers = await connection.teacher.findMany({
    select: {
      id: true,
      name: true,
      disciplineTeacher: {
        select: {
          discipline: {
            select: {
              id: true, 
              name: true,
              term: true
            }
          },
          tests: {
            orderBy: {
              id: 'asc'
            },
            select: {
              id: true,
              name: true,
              pdfUrl: true,
              category: true,
              viewsCount: true
            }
          }
        }
      }
    }
  });
  
  return teachers;
}