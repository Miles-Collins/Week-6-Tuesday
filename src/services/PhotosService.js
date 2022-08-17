// const { AppState } = require("../AppState")
// const { Photo } = require("../models/Photo")
// const { nasaApi } = require("./AxiosService")

import {AppState} from "../AppState"
import {Photo} from "../models/Photo"
import {nasaApi} from "../services/AxiosService"

class PhotosService {
  async getPhoto(){
    const res = await nasaApi.get('')
    console.log('Nasa data', res.data)
    let newPhoto = new Photo(res.data)
    AppState.photos = newPhoto 
  }
}

export const photosService = new PhotosService()