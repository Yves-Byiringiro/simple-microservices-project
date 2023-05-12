from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.response import Response
import requests



class EventHandler(APIView):
    def post(self, request):
        if request.method == 'POST':
            try:
                type = request.data['type']
                # cmt_status = request.data['data']['cmt_status']

                if type == 'CommentCreated':

                    cmt_status = 'rejected' if 'http' in request.data['data']['content'] else 'approved'

                    print("------------------- status in comments moderation (after checking)",cmt_status)


                    # content = request.data['data']['content']
                    # if 'http' in content.split() or 'www' in content.split():
                    #     cmt_status = 'rejected'
                    # else:
                    #     cmt_status = 'approved'
                    
                    id = request.data['data']['id']
                    postId = request.data['data']['postId']
                    content = request.data['data']['content']

                    url = 'http://localhost:8002/events'

                    # print("**********************************************")
                    # print(cmt_status)
                    # print("**********************************************")
                    print("------------------- status in comments moderation (before updates it to CommentModerated)",cmt_status)

                    requests.post(url, json={ 'type':'CommentModerated', 'data': {'id': id,'postId': postId, 'cmt_status':cmt_status,'content': content}})

                return Response({ 'message': 'success' }, status=status.HTTP_201_CREATED)
            except Exception as e:
                # print("***************** debugging *****************************")
                # print(str(e))
                # print("**********************************************")
                return Response({ 'message': 'something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)