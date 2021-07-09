/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
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
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram {
    onCreateProgram {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram {
    onUpdateProgram {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram {
    onDeleteProgram {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
export const onCreateProgramCampaign = /* GraphQL */ `
  subscription OnCreateProgramCampaign {
    onCreateProgramCampaign {
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
export const onUpdateProgramCampaign = /* GraphQL */ `
  subscription OnUpdateProgramCampaign {
    onUpdateProgramCampaign {
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
export const onDeleteProgramCampaign = /* GraphQL */ `
  subscription OnDeleteProgramCampaign {
    onDeleteProgramCampaign {
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
