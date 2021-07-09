/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Programs {
        nextToken
        startedAt
      }
      Campaigns {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Programs {
        nextToken
        startedAt
      }
      Campaigns {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Programs {
        nextToken
        startedAt
      }
      Campaigns {
        nextToken
        startedAt
      }
    }
  }
`;
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
      id
      name
      duration
      startDate
      slotAvailable
      scheduleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CampaignsInPrograms {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
      id
      name
      duration
      startDate
      slotAvailable
      scheduleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CampaignsInPrograms {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
      id
      name
      duration
      startDate
      slotAvailable
      scheduleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CampaignsInPrograms {
        nextToken
        startedAt
      }
    }
  }
`;
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      totalSlot
      slotAvailable
      slotUsed
      brandID
      scheduleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Programs {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      totalSlot
      slotAvailable
      slotUsed
      brandID
      scheduleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Programs {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      totalSlot
      slotAvailable
      slotUsed
      brandID
      scheduleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Programs {
        nextToken
        startedAt
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Brands {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Brands {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Brands {
        nextToken
        startedAt
      }
    }
  }
`;
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
      id
      name
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Campaigns {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
      id
      name
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Campaigns {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
      id
      name
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Campaigns {
        nextToken
        startedAt
      }
    }
  }
`;
export const createProgramCampaign = /* GraphQL */ `
  mutation CreateProgramCampaign(
    $input: CreateProgramCampaignInput!
    $condition: ModelProgramCampaignConditionInput
  ) {
    createProgramCampaign(input: $input, condition: $condition) {
      id
      programID
      campaignID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      program {
        id
        name
        duration
        startDate
        slotAvailable
        scheduleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      campaign {
        id
        name
        startDate
        endDate
        totalSlot
        slotAvailable
        slotUsed
        brandID
        scheduleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateProgramCampaign = /* GraphQL */ `
  mutation UpdateProgramCampaign(
    $input: UpdateProgramCampaignInput!
    $condition: ModelProgramCampaignConditionInput
  ) {
    updateProgramCampaign(input: $input, condition: $condition) {
      id
      programID
      campaignID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      program {
        id
        name
        duration
        startDate
        slotAvailable
        scheduleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      campaign {
        id
        name
        startDate
        endDate
        totalSlot
        slotAvailable
        slotUsed
        brandID
        scheduleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteProgramCampaign = /* GraphQL */ `
  mutation DeleteProgramCampaign(
    $input: DeleteProgramCampaignInput!
    $condition: ModelProgramCampaignConditionInput
  ) {
    deleteProgramCampaign(input: $input, condition: $condition) {
      id
      programID
      campaignID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      program {
        id
        name
        duration
        startDate
        slotAvailable
        scheduleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      campaign {
        id
        name
        startDate
        endDate
        totalSlot
        slotAvailable
        slotUsed
        brandID
        scheduleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
