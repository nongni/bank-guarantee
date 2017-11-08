function onUpdateStatus(tx){
	tx.lg.documentStatus = tx.documentStatus
  
  	return getAssetRegistry('com.krungsri.lg.network.BankGaruntee')
  	.then(function (assetRegistry){
    	return assetRegistry.update(tx.lg)
    	})
}

function onUpdateApproval(tx){
  	if (tx.bgNo == '' ){
    	tx.lg.documentStatus = 'Bank Reject'
    	tx.lg.serviceType = 'Reject'
    	tx.lg.Reason = 'xxxx'
      
    }
    if (tx.bgNo != '' ){
        tx.lg.BGNo = tx.bgNo
    	tx.lg.documentStatus = 'Complete'
    	tx.lg.serviceType = 'Approved'
    } 
  
  
  	return getAssetRegistry('com.krungsri.lg.network.BankGaruntee')
  	.then(function (assetRegistry){
    	return assetRegistry.update(tx.lg)
    	})
}

function onUpdateReturn(tx){
  	if (tx.lg.serviceType  == 'Approved' && tx.lg.documentStatus == 'Complete' ){
    	
    	tx.lg.serviceType = 'Return'
    	tx.lg.returnDate = '12/12/2017'
    }
   
  
  	return getAssetRegistry('com.krungsri.lg.network.BankGaruntee')
  	.then(function (assetRegistry){
    	return assetRegistry.update(tx.lg)
    	})
}