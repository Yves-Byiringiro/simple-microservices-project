
class EventHandler(APIView):
    def post(self, request):
        if request.method == 'POST':
            try:
                print({'Event Received': request.data['type']}) 
                return Response({ 'message': 'success' }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({ 'message': 'something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            


# Posts