/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

	document.addEventListener('deviceready', this.onDeviceReady, false);
	document.addEventListener('onCleverTapProfileSync', this.onCleverTapProfileSync, false); // optional: to be notified of CleverTap user profile synchronization updates 
	document.addEventListener('onCleverTapProfileDidInitialize', this.onCleverTapProfileDidInitialize, false); // optional, to be notified when the CleverTap user profile is initialized
	document.addEventListener('onCleverTapInAppNotificationDismissed', this.onCleverTapInAppNotificationDismissed, false); // optional, to be receive a callback with custom in-app notification click data
	document.addEventListener('onDeepLink', this.onDeepLink, false); // optional, register to receive deep links.
	document.addEventListener('onPushNotification', this.onPushNotification, false); // optional, register to receive push notification payloads.
    document.addEventListener('onCleverTapPushNotificationTappedWithCustomExtras', this.onCleverTapPushNotificationTappedWithCustomExtras, false);
    document.addEventListener('onCleverTapPushAmpPayloadDidReceived', this.onCleverTapPushAmpPayloadDidReceived, false);
	
    // deep link handling  
    function DeepLink(e) {
        console.log(e.deeplink);  
    }  

    // push notification data handling
    function PushNotification(e) {
        console.log(JSON.stringify(e.notification));
    }
      
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
	document.getElementById('clickme').addEventListener('click',msg);
	 CleverTap.registerPush();
	  CleverTap.setDebugLevel(3);
	 CleverTap.setPushToken("86114454762");
	 CleverTap.pushInstallReferrer("source", "medium", "campaign");
	 CleverTap.onUserLogin({"Identity":098767, "custom":1.3});
     CleverTap.profileSet({"Identity":123456, "Name":"Rihana","Email":"rihana@gmail.com","Gender":"Female","DOB":"1990-10-15", "custom":1.3});
	 CleverTap.recordChargedEventWithDetailsAndItems({"amount":300, "Charged ID":1234}, [{"Category":"Books", "Quantity":1, "Title":"Book Title"}]);	 
	 CleverTap.pushInboxNotificationViewedEventForId("messageId");
     CleverTap.pushInboxNotificationClickedEventForId("messageId");
	 CleverTap.fetch();
     CleverTap.fetchWithMinimumFetchIntervalInSeconds(100);
     CleverTap.activate();
     CleverTap.fetchAndActivate();
     CleverTap.setMinimumFetchIntervalInSeconds(100);
}


function msg(){
	alert("Example for push notification");
}
