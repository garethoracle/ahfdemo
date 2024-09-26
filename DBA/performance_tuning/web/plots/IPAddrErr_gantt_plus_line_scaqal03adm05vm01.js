
        
        define(["require", "exports"], function (require, exports) {
        
          const plot = {"data":[{"alignmentgroup":"True","base":["2024-08-29T16:49:50","2024-08-29T16:57:35","2024-08-29T17:00:50","2024-08-29T17:03:25","2024-08-29T17:05:05","2024-08-29T17:06:30","2024-08-29T17:07:35","2024-08-29T17:11:30","2024-08-29T17:14:20","2024-08-29T17:14:35","2024-08-29T17:17:35","2024-08-29T17:20:35"],"customdata":[["10.0 seconds"],["10.0 seconds"],["10.0 seconds"],["10.0 seconds"],["10.0 seconds"],["10.0 seconds"],["10.0 seconds"],["15.0 seconds"],["10.0 seconds"],["10.0 seconds"],["10.0 seconds"],["10.0 seconds"]],"hovertemplate":"startTime=%{base}\u003cbr\u003eendTime=%{x}\u003cbr\u003efinding=%{y}\u003cbr\u003eduration=%{customdata[0]}\u003cextra\u003e\u003c\u002fextra\u003e","legendgroup":"IPAddrErr","marker":{"color":"#636EFA","pattern":{"shape":""}},"name":"IPAddrErr","offsetgroup":"","orientation":"h","showlegend":true,"textposition":"auto","x":[5000.0,5000.0,5000.0,5000.0,5000.0,5000.0,5000.0,10000.0,5000.0,5000.0,5000.0,5000.0],"xaxis":"x","y":["IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr","IPAddrErr"],"yaxis":"y","type":"bar"},{"hovertemplate":"metric=ipHdrErrRate[#\u002fs]\u003cbr\u003etimestamp=%{x}\u003cbr\u003evalue=%{y}\u003cextra\u003e\u003c\u002fextra\u003e","legendgroup":"Associated Metrics","legendgrouptitle":{"text":"Associated Metrics"},"line":{"color":"#636EFA","dash":"solid"},"marker":{"size":8,"symbol":"circle"},"mode":"lines","name":"ipHdrErrRate[#\u002fs]","orientation":"v","showlegend":true,"x":["2024-08-29T16:32:00-07:00","2024-08-29T16:33:00-07:00","2024-08-29T16:34:00-07:00","2024-08-29T16:35:00-07:00","2024-08-29T16:36:00-07:00","2024-08-29T16:37:00-07:00","2024-08-29T16:38:00-07:00","2024-08-29T16:39:00-07:00","2024-08-29T16:40:00-07:00","2024-08-29T16:41:00-07:00","2024-08-29T16:42:00-07:00","2024-08-29T16:43:00-07:00","2024-08-29T16:44:00-07:00","2024-08-29T16:45:00-07:00","2024-08-29T16:46:00-07:00","2024-08-29T16:47:00-07:00","2024-08-29T16:48:00-07:00","2024-08-29T16:49:00-07:00","2024-08-29T16:49:50-07:00","2024-08-29T16:49:55-07:00","2024-08-29T16:50:55-07:00","2024-08-29T16:51:55-07:00","2024-08-29T16:52:55-07:00","2024-08-29T16:53:55-07:00","2024-08-29T16:54:55-07:00","2024-08-29T16:55:55-07:00","2024-08-29T16:56:55-07:00","2024-08-29T16:57:35-07:00","2024-08-29T16:57:40-07:00","2024-08-29T16:58:40-07:00","2024-08-29T16:59:40-07:00","2024-08-29T17:00:55-07:00","2024-08-29T17:01:55-07:00","2024-08-29T17:02:55-07:00","2024-08-29T17:03:25-07:00","2024-08-29T17:03:30-07:00","2024-08-29T17:04:30-07:00","2024-08-29T17:05:05-07:00","2024-08-29T17:05:10-07:00","2024-08-29T17:06:10-07:00","2024-08-29T17:06:30-07:00","2024-08-29T17:06:35-07:00","2024-08-29T17:07:35-07:00","2024-08-29T17:07:40-07:00","2024-08-29T17:08:40-07:00","2024-08-29T17:09:40-07:00","2024-08-29T17:10:40-07:00","2024-08-29T17:11:30-07:00","2024-08-29T17:11:35-07:00","2024-08-29T17:11:40-07:00","2024-08-29T17:12:40-07:00","2024-08-29T17:13:40-07:00","2024-08-29T17:14:20-07:00","2024-08-29T17:14:25-07:00","2024-08-29T17:14:35-07:00","2024-08-29T17:14:40-07:00","2024-08-29T17:15:40-07:00","2024-08-29T17:16:40-07:00","2024-08-29T17:17:35-07:00","2024-08-29T17:17:40-07:00","2024-08-29T17:18:40-07:00","2024-08-29T17:19:40-07:00","2024-08-29T17:20:35-07:00","2024-08-29T17:20:40-07:00","2024-08-29T17:21:40-07:00","2024-08-29T17:22:40-07:00","2024-08-29T17:23:40-07:00","2024-08-29T17:24:40-07:00","2024-08-29T17:25:40-07:00","2024-08-29T17:26:40-07:00","2024-08-29T17:27:40-07:00","2024-08-29T17:28:40-07:00","2024-08-29T17:29:40-07:00"],"xaxis":"x2","y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],"yaxis":"y2","type":"scatter"},{"hovertemplate":"metric=addrErrRate[#\u002fs]\u003cbr\u003etimestamp=%{x}\u003cbr\u003evalue=%{y}\u003cextra\u003e\u003c\u002fextra\u003e","legendgroup":"Associated Metrics","legendgrouptitle":{"text":"Associated Metrics"},"line":{"color":"#00CC96","dash":"solid"},"marker":{"size":8,"symbol":"circle"},"mode":"lines","name":"addrErrRate[#\u002fs]","orientation":"v","showlegend":true,"x":["2024-08-29T16:32:00-07:00","2024-08-29T16:33:00-07:00","2024-08-29T16:34:00-07:00","2024-08-29T16:35:00-07:00","2024-08-29T16:36:00-07:00","2024-08-29T16:37:00-07:00","2024-08-29T16:38:00-07:00","2024-08-29T16:39:00-07:00","2024-08-29T16:40:00-07:00","2024-08-29T16:41:00-07:00","2024-08-29T16:42:00-07:00","2024-08-29T16:43:00-07:00","2024-08-29T16:44:00-07:00","2024-08-29T16:45:00-07:00","2024-08-29T16:46:00-07:00","2024-08-29T16:47:00-07:00","2024-08-29T16:48:00-07:00","2024-08-29T16:49:00-07:00","2024-08-29T16:49:50-07:00","2024-08-29T16:49:55-07:00","2024-08-29T16:50:55-07:00","2024-08-29T16:51:55-07:00","2024-08-29T16:52:55-07:00","2024-08-29T16:53:55-07:00","2024-08-29T16:54:55-07:00","2024-08-29T16:55:55-07:00","2024-08-29T16:56:55-07:00","2024-08-29T16:57:35-07:00","2024-08-29T16:57:40-07:00","2024-08-29T16:58:40-07:00","2024-08-29T16:59:40-07:00","2024-08-29T17:00:55-07:00","2024-08-29T17:01:55-07:00","2024-08-29T17:02:55-07:00","2024-08-29T17:03:25-07:00","2024-08-29T17:03:30-07:00","2024-08-29T17:04:30-07:00","2024-08-29T17:05:05-07:00","2024-08-29T17:05:10-07:00","2024-08-29T17:06:10-07:00","2024-08-29T17:06:30-07:00","2024-08-29T17:06:35-07:00","2024-08-29T17:07:35-07:00","2024-08-29T17:07:40-07:00","2024-08-29T17:08:40-07:00","2024-08-29T17:09:40-07:00","2024-08-29T17:10:40-07:00","2024-08-29T17:11:30-07:00","2024-08-29T17:11:35-07:00","2024-08-29T17:11:40-07:00","2024-08-29T17:12:40-07:00","2024-08-29T17:13:40-07:00","2024-08-29T17:14:20-07:00","2024-08-29T17:14:25-07:00","2024-08-29T17:14:35-07:00","2024-08-29T17:14:40-07:00","2024-08-29T17:15:40-07:00","2024-08-29T17:16:40-07:00","2024-08-29T17:17:35-07:00","2024-08-29T17:17:40-07:00","2024-08-29T17:18:40-07:00","2024-08-29T17:19:40-07:00","2024-08-29T17:20:35-07:00","2024-08-29T17:20:40-07:00","2024-08-29T17:21:40-07:00","2024-08-29T17:22:40-07:00","2024-08-29T17:23:40-07:00","2024-08-29T17:24:40-07:00","2024-08-29T17:25:40-07:00","2024-08-29T17:26:40-07:00","2024-08-29T17:27:40-07:00","2024-08-29T17:28:40-07:00","2024-08-29T17:29:40-07:00"],"xaxis":"x2","y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.4,0.8,0.0,1.2,0.0,0.0,0.0,0.0,0.0,2.0,0.4,1.2,0.0,1.2,0.0,0.0,0.4,0.8,25.2,23.6,48.8,2.0,1.2,1.6,2.0,0.4,0.8,1.6,1.2,1.6,0.8,1.2,2.4,0.0,31.6,10.8,13.6,18.0,12.0,0.0,0.4,0.8,1.2,0.0,0.8,0.4,1.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],"yaxis":"y2","type":"scatter"},{"hovertemplate":"metric=unkProtoErrRate[#\u002fs]\u003cbr\u003etimestamp=%{x}\u003cbr\u003evalue=%{y}\u003cextra\u003e\u003c\u002fextra\u003e","legendgroup":"Associated Metrics","legendgrouptitle":{"text":"Associated Metrics"},"line":{"color":"#AB63FA","dash":"solid"},"marker":{"size":8,"symbol":"circle"},"mode":"lines","name":"unkProtoErrRate[#\u002fs]","orientation":"v","showlegend":true,"x":["2024-08-29T16:32:00-07:00","2024-08-29T16:33:00-07:00","2024-08-29T16:34:00-07:00","2024-08-29T16:35:00-07:00","2024-08-29T16:36:00-07:00","2024-08-29T16:37:00-07:00","2024-08-29T16:38:00-07:00","2024-08-29T16:39:00-07:00","2024-08-29T16:40:00-07:00","2024-08-29T16:41:00-07:00","2024-08-29T16:42:00-07:00","2024-08-29T16:43:00-07:00","2024-08-29T16:44:00-07:00","2024-08-29T16:45:00-07:00","2024-08-29T16:46:00-07:00","2024-08-29T16:47:00-07:00","2024-08-29T16:48:00-07:00","2024-08-29T16:49:00-07:00","2024-08-29T16:49:50-07:00","2024-08-29T16:49:55-07:00","2024-08-29T16:50:55-07:00","2024-08-29T16:51:55-07:00","2024-08-29T16:52:55-07:00","2024-08-29T16:53:55-07:00","2024-08-29T16:54:55-07:00","2024-08-29T16:55:55-07:00","2024-08-29T16:56:55-07:00","2024-08-29T16:57:35-07:00","2024-08-29T16:57:40-07:00","2024-08-29T16:58:40-07:00","2024-08-29T16:59:40-07:00","2024-08-29T17:00:55-07:00","2024-08-29T17:01:55-07:00","2024-08-29T17:02:55-07:00","2024-08-29T17:03:25-07:00","2024-08-29T17:03:30-07:00","2024-08-29T17:04:30-07:00","2024-08-29T17:05:05-07:00","2024-08-29T17:05:10-07:00","2024-08-29T17:06:10-07:00","2024-08-29T17:06:30-07:00","2024-08-29T17:06:35-07:00","2024-08-29T17:07:35-07:00","2024-08-29T17:07:40-07:00","2024-08-29T17:08:40-07:00","2024-08-29T17:09:40-07:00","2024-08-29T17:10:40-07:00","2024-08-29T17:11:30-07:00","2024-08-29T17:11:35-07:00","2024-08-29T17:11:40-07:00","2024-08-29T17:12:40-07:00","2024-08-29T17:13:40-07:00","2024-08-29T17:14:20-07:00","2024-08-29T17:14:25-07:00","2024-08-29T17:14:35-07:00","2024-08-29T17:14:40-07:00","2024-08-29T17:15:40-07:00","2024-08-29T17:16:40-07:00","2024-08-29T17:17:35-07:00","2024-08-29T17:17:40-07:00","2024-08-29T17:18:40-07:00","2024-08-29T17:19:40-07:00","2024-08-29T17:20:35-07:00","2024-08-29T17:20:40-07:00","2024-08-29T17:21:40-07:00","2024-08-29T17:22:40-07:00","2024-08-29T17:23:40-07:00","2024-08-29T17:24:40-07:00","2024-08-29T17:25:40-07:00","2024-08-29T17:26:40-07:00","2024-08-29T17:27:40-07:00","2024-08-29T17:28:40-07:00","2024-08-29T17:29:40-07:00"],"xaxis":"x2","y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],"yaxis":"y2","type":"scatter"},{"hovertemplate":"metric=reasFailErrRate[#\u002fs]\u003cbr\u003etimestamp=%{x}\u003cbr\u003evalue=%{y}\u003cextra\u003e\u003c\u002fextra\u003e","legendgroup":"Associated Metrics","legendgrouptitle":{"text":"Associated Metrics"},"line":{"color":"#FFA15A","dash":"solid"},"marker":{"size":8,"symbol":"circle"},"mode":"lines","name":"reasFailErrRate[#\u002fs]","orientation":"v","showlegend":true,"x":["2024-08-29T16:32:00-07:00","2024-08-29T16:33:00-07:00","2024-08-29T16:34:00-07:00","2024-08-29T16:35:00-07:00","2024-08-29T16:36:00-07:00","2024-08-29T16:37:00-07:00","2024-08-29T16:38:00-07:00","2024-08-29T16:39:00-07:00","2024-08-29T16:40:00-07:00","2024-08-29T16:41:00-07:00","2024-08-29T16:42:00-07:00","2024-08-29T16:43:00-07:00","2024-08-29T16:44:00-07:00","2024-08-29T16:45:00-07:00","2024-08-29T16:46:00-07:00","2024-08-29T16:47:00-07:00","2024-08-29T16:48:00-07:00","2024-08-29T16:49:00-07:00","2024-08-29T16:49:50-07:00","2024-08-29T16:49:55-07:00","2024-08-29T16:50:55-07:00","2024-08-29T16:51:55-07:00","2024-08-29T16:52:55-07:00","2024-08-29T16:53:55-07:00","2024-08-29T16:54:55-07:00","2024-08-29T16:55:55-07:00","2024-08-29T16:56:55-07:00","2024-08-29T16:57:35-07:00","2024-08-29T16:57:40-07:00","2024-08-29T16:58:40-07:00","2024-08-29T16:59:40-07:00","2024-08-29T17:00:55-07:00","2024-08-29T17:01:55-07:00","2024-08-29T17:02:55-07:00","2024-08-29T17:03:25-07:00","2024-08-29T17:03:30-07:00","2024-08-29T17:04:30-07:00","2024-08-29T17:05:05-07:00","2024-08-29T17:05:10-07:00","2024-08-29T17:06:10-07:00","2024-08-29T17:06:30-07:00","2024-08-29T17:06:35-07:00","2024-08-29T17:07:35-07:00","2024-08-29T17:07:40-07:00","2024-08-29T17:08:40-07:00","2024-08-29T17:09:40-07:00","2024-08-29T17:10:40-07:00","2024-08-29T17:11:30-07:00","2024-08-29T17:11:35-07:00","2024-08-29T17:11:40-07:00","2024-08-29T17:12:40-07:00","2024-08-29T17:13:40-07:00","2024-08-29T17:14:20-07:00","2024-08-29T17:14:25-07:00","2024-08-29T17:14:35-07:00","2024-08-29T17:14:40-07:00","2024-08-29T17:15:40-07:00","2024-08-29T17:16:40-07:00","2024-08-29T17:17:35-07:00","2024-08-29T17:17:40-07:00","2024-08-29T17:18:40-07:00","2024-08-29T17:19:40-07:00","2024-08-29T17:20:35-07:00","2024-08-29T17:20:40-07:00","2024-08-29T17:21:40-07:00","2024-08-29T17:22:40-07:00","2024-08-29T17:23:40-07:00","2024-08-29T17:24:40-07:00","2024-08-29T17:25:40-07:00","2024-08-29T17:26:40-07:00","2024-08-29T17:27:40-07:00","2024-08-29T17:28:40-07:00","2024-08-29T17:29:40-07:00"],"xaxis":"x2","y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],"yaxis":"y2","type":"scatter"},{"hovertemplate":"metric=fragFailErrRate[#\u002fs]\u003cbr\u003etimestamp=%{x}\u003cbr\u003evalue=%{y}\u003cextra\u003e\u003c\u002fextra\u003e","legendgroup":"Associated Metrics","legendgrouptitle":{"text":"Associated Metrics"},"line":{"color":"#19D3F3","dash":"solid"},"marker":{"size":8,"symbol":"circle"},"mode":"lines","name":"fragFailErrRate[#\u002fs]","orientation":"v","showlegend":true,"x":["2024-08-29T16:32:00-07:00","2024-08-29T16:33:00-07:00","2024-08-29T16:34:00-07:00","2024-08-29T16:35:00-07:00","2024-08-29T16:36:00-07:00","2024-08-29T16:37:00-07:00","2024-08-29T16:38:00-07:00","2024-08-29T16:39:00-07:00","2024-08-29T16:40:00-07:00","2024-08-29T16:41:00-07:00","2024-08-29T16:42:00-07:00","2024-08-29T16:43:00-07:00","2024-08-29T16:44:00-07:00","2024-08-29T16:45:00-07:00","2024-08-29T16:46:00-07:00","2024-08-29T16:47:00-07:00","2024-08-29T16:48:00-07:00","2024-08-29T16:49:00-07:00","2024-08-29T16:49:50-07:00","2024-08-29T16:49:55-07:00","2024-08-29T16:50:55-07:00","2024-08-29T16:51:55-07:00","2024-08-29T16:52:55-07:00","2024-08-29T16:53:55-07:00","2024-08-29T16:54:55-07:00","2024-08-29T16:55:55-07:00","2024-08-29T16:56:55-07:00","2024-08-29T16:57:35-07:00","2024-08-29T16:57:40-07:00","2024-08-29T16:58:40-07:00","2024-08-29T16:59:40-07:00","2024-08-29T17:00:55-07:00","2024-08-29T17:01:55-07:00","2024-08-29T17:02:55-07:00","2024-08-29T17:03:25-07:00","2024-08-29T17:03:30-07:00","2024-08-29T17:04:30-07:00","2024-08-29T17:05:05-07:00","2024-08-29T17:05:10-07:00","2024-08-29T17:06:10-07:00","2024-08-29T17:06:30-07:00","2024-08-29T17:06:35-07:00","2024-08-29T17:07:35-07:00","2024-08-29T17:07:40-07:00","2024-08-29T17:08:40-07:00","2024-08-29T17:09:40-07:00","2024-08-29T17:10:40-07:00","2024-08-29T17:11:30-07:00","2024-08-29T17:11:35-07:00","2024-08-29T17:11:40-07:00","2024-08-29T17:12:40-07:00","2024-08-29T17:13:40-07:00","2024-08-29T17:14:20-07:00","2024-08-29T17:14:25-07:00","2024-08-29T17:14:35-07:00","2024-08-29T17:14:40-07:00","2024-08-29T17:15:40-07:00","2024-08-29T17:16:40-07:00","2024-08-29T17:17:35-07:00","2024-08-29T17:17:40-07:00","2024-08-29T17:18:40-07:00","2024-08-29T17:19:40-07:00","2024-08-29T17:20:35-07:00","2024-08-29T17:20:40-07:00","2024-08-29T17:21:40-07:00","2024-08-29T17:22:40-07:00","2024-08-29T17:23:40-07:00","2024-08-29T17:24:40-07:00","2024-08-29T17:25:40-07:00","2024-08-29T17:26:40-07:00","2024-08-29T17:27:40-07:00","2024-08-29T17:28:40-07:00","2024-08-29T17:29:40-07:00"],"xaxis":"x2","y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],"yaxis":"y2","type":"scatter"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T16:49:50","2024-08-29T16:49:55","2024-08-29T16:49:55","2024-08-29T16:49:50"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T16:57:35","2024-08-29T16:57:40","2024-08-29T16:57:40","2024-08-29T16:57:35"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:00:50","2024-08-29T17:00:55","2024-08-29T17:00:55","2024-08-29T17:00:50"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:03:25","2024-08-29T17:03:30","2024-08-29T17:03:30","2024-08-29T17:03:25"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:05:05","2024-08-29T17:05:10","2024-08-29T17:05:10","2024-08-29T17:05:05"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:06:30","2024-08-29T17:06:35","2024-08-29T17:06:35","2024-08-29T17:06:30"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:07:35","2024-08-29T17:07:40","2024-08-29T17:07:40","2024-08-29T17:07:35"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:11:30","2024-08-29T17:11:40","2024-08-29T17:11:40","2024-08-29T17:11:30"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:14:20","2024-08-29T17:14:25","2024-08-29T17:14:25","2024-08-29T17:14:20"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:14:35","2024-08-29T17:14:40","2024-08-29T17:14:40","2024-08-29T17:14:35"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:17:35","2024-08-29T17:17:40","2024-08-29T17:17:40","2024-08-29T17:17:35"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"},{"fill":"toself","fillcolor":"#636EFA","hoverinfo":"text","legendgroup":"Associated Metrics","line":{"width":0},"mode":"lines","name":"IPAddrErr","opacity":0.3,"showlegend":false,"text":"IPAddrErr","x":["2024-08-29T17:20:35","2024-08-29T17:20:40","2024-08-29T17:20:40","2024-08-29T17:20:35"],"y":[0,0,48.8,48.8],"type":"scatter","xaxis":"x2","yaxis":"y2"}],"layout":{"template":{"data":{"barpolar":[{"marker":{"line":{"color":"white","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"barpolar"}],"bar":[{"error_x":{"color":"#2a3f5f"},"error_y":{"color":"#2a3f5f"},"marker":{"line":{"color":"white","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"bar"}],"carpet":[{"aaxis":{"endlinecolor":"#2a3f5f","gridcolor":"#C8D4E3","linecolor":"#C8D4E3","minorgridcolor":"#C8D4E3","startlinecolor":"#2a3f5f"},"baxis":{"endlinecolor":"#2a3f5f","gridcolor":"#C8D4E3","linecolor":"#C8D4E3","minorgridcolor":"#C8D4E3","startlinecolor":"#2a3f5f"},"type":"carpet"}],"choropleth":[{"colorbar":{"outlinewidth":0,"ticks":""},"type":"choropleth"}],"contourcarpet":[{"colorbar":{"outlinewidth":0,"ticks":""},"type":"contourcarpet"}],"contour":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"contour"}],"heatmapgl":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"heatmapgl"}],"heatmap":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"heatmap"}],"histogram2dcontour":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"histogram2dcontour"}],"histogram2d":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"histogram2d"}],"histogram":[{"marker":{"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"histogram"}],"mesh3d":[{"colorbar":{"outlinewidth":0,"ticks":""},"type":"mesh3d"}],"parcoords":[{"line":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"parcoords"}],"pie":[{"automargin":true,"type":"pie"}],"scatter3d":[{"line":{"colorbar":{"outlinewidth":0,"ticks":""}},"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatter3d"}],"scattercarpet":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattercarpet"}],"scattergeo":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattergeo"}],"scattergl":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattergl"}],"scattermapbox":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattermapbox"}],"scatterpolargl":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatterpolargl"}],"scatterpolar":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatterpolar"}],"scatter":[{"fillpattern":{"fillmode":"overlay","size":10,"solidity":0.2},"type":"scatter"}],"scatterternary":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatterternary"}],"surface":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"surface"}],"table":[{"cells":{"fill":{"color":"#EBF0F8"},"line":{"color":"white"}},"header":{"fill":{"color":"#C8D4E3"},"line":{"color":"white"}},"type":"table"}]},"layout":{"annotationdefaults":{"arrowcolor":"#2a3f5f","arrowhead":0,"arrowwidth":1},"autotypenumbers":"strict","coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]],"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]},"colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#2a3f5f"},"geo":{"bgcolor":"white","lakecolor":"white","landcolor":"white","showlakes":true,"showland":true,"subunitcolor":"#C8D4E3"},"hoverlabel":{"align":"left"},"hovermode":"closest","mapbox":{"style":"light"},"paper_bgcolor":"white","plot_bgcolor":"white","polar":{"angularaxis":{"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":""},"bgcolor":"white","radialaxis":{"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":""}},"scene":{"xaxis":{"backgroundcolor":"white","gridcolor":"#DFE8F3","gridwidth":2,"linecolor":"#EBF0F8","showbackground":true,"ticks":"","zerolinecolor":"#EBF0F8"},"yaxis":{"backgroundcolor":"white","gridcolor":"#DFE8F3","gridwidth":2,"linecolor":"#EBF0F8","showbackground":true,"ticks":"","zerolinecolor":"#EBF0F8"},"zaxis":{"backgroundcolor":"white","gridcolor":"#DFE8F3","gridwidth":2,"linecolor":"#EBF0F8","showbackground":true,"ticks":"","zerolinecolor":"#EBF0F8"}},"shapedefaults":{"line":{"color":"#2a3f5f"}},"ternary":{"aaxis":{"gridcolor":"#DFE8F3","linecolor":"#A2B1C6","ticks":""},"baxis":{"gridcolor":"#DFE8F3","linecolor":"#A2B1C6","ticks":""},"bgcolor":"white","caxis":{"gridcolor":"#DFE8F3","linecolor":"#A2B1C6","ticks":""}},"title":{"x":0.05},"xaxis":{"automargin":true,"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":"","title":{"standoff":15},"zerolinecolor":"#EBF0F8","zerolinewidth":2},"yaxis":{"automargin":true,"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":"","title":{"standoff":15},"zerolinecolor":"#EBF0F8","zerolinewidth":2}}},"xaxis":{"anchor":"y","domain":[0.0,0.45],"type":"date","showticklabels":true,"showline":true,"linewidth":1,"linecolor":"black","matches":"x","showspikes":true,"spikemode":"across+toaxis","spikesnap":"cursor","spikethickness":1},"yaxis":{"anchor":"x","domain":[0.0,1.0],"rangemode":"tozero"},"xaxis2":{"anchor":"y2","domain":[0.55,1.0],"type":"date","showticklabels":true,"showline":true,"linewidth":1,"linecolor":"black","matches":"x","showspikes":true,"spikemode":"across+toaxis","spikesnap":"cursor","spikethickness":1},"yaxis2":{"anchor":"x2","domain":[0.0,1.0],"rangemode":"tozero","title":{"text":"#\u002fs"}},"annotations":[{"font":{"size":12},"showarrow":false,"text":"\u003cb\u003eIPAddrErr Timeline\u003c\u002fb\u003e","x":0.225,"xanchor":"center","xref":"paper","y":1.0,"yanchor":"bottom","yref":"paper"},{"font":{"size":12},"showarrow":false,"text":"\u003cb\u003e\u003cb\u003eError Count Rate\u003c\u002fb\u003e\u003c\u002fb\u003e","x":0.775,"xanchor":"center","xref":"paper","y":1.0,"yanchor":"bottom","yref":"paper"}],"legend":{"groupclick":"toggleitem","tracegroupgap":10},"height":350,"hovermode":"x"}};
          
          exports.default = plot;
          
        });

        