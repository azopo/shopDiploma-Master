import fs from 'fs'
import multer from 'multer'
const folderPath = './assets/images'
const limits = {
  limits: {
    files: 1,
    fieldNameSize: 400,
    fileSize: 80 * 1024 * 1024,
  },
}

const createFolderIfNotExist = (path) => {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true })
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e + ' in uploadService.js/createFolderIfNotExist')
    throw e
  }
}

const filename = (_req, file, cb) => {
  try {
    cb(null, file.originalname)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e + ' in uploadService.js/filename')
    throw e
  }
}

const destination = async (_req, _file, cb) => {
  try {
    await createFolderIfNotExist(folderPath)
    cb(null, folderPath)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e + ' in uploadService.js/destination')
    throw e
  }
}
export default () => {
  try {
    const options = {
      limits: {
        ...limits,
      },
      storage: multer.diskStorage({
        filename,
        destination,
      }),
    }
    return multer(options).any()
  } catch (e) {
    console.error(e + ' in uploadService.js')
    throw e
  }
}
