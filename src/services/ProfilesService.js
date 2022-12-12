import { api } from "./AxiosService"
import { logger } from "../utils/Logger.js"
import { Account } from "../models/Account"
import { AppState } from "../AppState.js"

class ProfilesService {

  async getProfileById(profileId) {
    const res = await api.get('api/profiles/' + profileId)
    logger.log('getting profile', res.data)
    AppState.activeProfile = res.data
    console.log(AppState.activeProfile)
  }





}

export const profilesService = new ProfilesService()