import { ProjectWithVoluntaryId } from '@/types/project'
import { generateLocalUrl } from '@/helpers/generateUrl'


export async function createProject(project: ProjectWithVoluntaryId) {
  return await fetch(generateLocalUrl('/api/projects'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    body: JSON.stringify(project),
  });


}

export async function updateProject(project: ProjectWithVoluntaryId) {
  return await fetch(generateLocalUrl('/api/projects'), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    body: JSON.stringify(project),
  });

}
