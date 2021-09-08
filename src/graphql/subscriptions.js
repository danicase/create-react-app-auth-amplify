/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
      id
      name
      startDate
      endDate
      createdAt
      updatedAt
      Programs {
        nextToken
      }
      Campaigns {
        nextToken
      }
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
      id
      name
      startDate
      endDate
      createdAt
      updatedAt
      Programs {
        nextToken
      }
      Campaigns {
        nextToken
      }
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
      id
      name
      startDate
      endDate
      createdAt
      updatedAt
      Programs {
        nextToken
      }
      Campaigns {
        nextToken
      }
    }
  }
`;
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram {
    onCreateProgram {
      id
      name
      duration
      startDate
      slotAvailable
      scheduleID
      createdAt
      updatedAt
      CampaignsInPrograms {
        nextToken
      }
    }
  }
`;
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram {
    onUpdateProgram {
      id
      name
      duration
      startDate
      slotAvailable
      scheduleID
      createdAt
      updatedAt
      CampaignsInPrograms {
        nextToken
      }
    }
  }
`;
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram {
    onDeleteProgram {
      id
      name
      duration
      startDate
      slotAvailable
      scheduleID
      createdAt
      updatedAt
      CampaignsInPrograms {
        nextToken
      }
    }
  }
`;
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
      id
      name
      startDate
      endDate
      totalSlot
      slotAvailable
      slotUsed
      brandID
      scheduleID
      createdAt
      updatedAt
      Programs {
        nextToken
      }
    }
  }
`;
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
      id
      name
      startDate
      endDate
      totalSlot
      slotAvailable
      slotUsed
      brandID
      scheduleID
      createdAt
      updatedAt
      Programs {
        nextToken
      }
    }
  }
`;
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
      id
      name
      startDate
      endDate
      totalSlot
      slotAvailable
      slotUsed
      brandID
      scheduleID
      createdAt
      updatedAt
      Programs {
        nextToken
      }
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
      Brands {
        nextToken
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
      Brands {
        nextToken
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
      Brands {
        nextToken
      }
    }
  }
`;
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
      id
      name
      categoryID
      createdAt
      updatedAt
      Campaigns {
        nextToken
      }
    }
  }
`;
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
      id
      name
      categoryID
      createdAt
      updatedAt
      Campaigns {
        nextToken
      }
    }
  }
`;
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
      id
      name
      categoryID
      createdAt
      updatedAt
      Campaigns {
        nextToken
      }
    }
  }
`;
export const onCreateProgramCampaign = /* GraphQL */ `
  subscription OnCreateProgramCampaign {
    onCreateProgramCampaign {
      id
      programID
      campaignID
      createdAt
      updatedAt
      program {
        id
        name
        duration
        startDate
        slotAvailable
        scheduleID
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
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateProgramCampaign = /* GraphQL */ `
  subscription OnUpdateProgramCampaign {
    onUpdateProgramCampaign {
      id
      programID
      campaignID
      createdAt
      updatedAt
      program {
        id
        name
        duration
        startDate
        slotAvailable
        scheduleID
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
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteProgramCampaign = /* GraphQL */ `
  subscription OnDeleteProgramCampaign {
    onDeleteProgramCampaign {
      id
      programID
      campaignID
      createdAt
      updatedAt
      program {
        id
        name
        duration
        startDate
        slotAvailable
        scheduleID
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
        createdAt
        updatedAt
      }
    }
  }
`;
