from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        Leaderboard.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel', description='Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='DC Superheroes')

        # Create users
        users = [
            User(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User(name='Batman', email='batman@dc.com', team=dc),
        ]
        for user in users:
            user.save()

        # Create workouts
        workout1 = Workout.objects.create(name='Web Swing', description='Swinging through the city')
        workout1.suggested_for.add(marvel)
        workout2 = Workout.objects.create(name='Gadget Training', description='Training with gadgets')
        workout2.suggested_for.add(dc)

        # Create activities
        Activity.objects.create(user=users[0], type='Swing', duration=30)
        Activity.objects.create(user=users[1], type='Fly', duration=45)
        Activity.objects.create(user=users[2], type='Lasso', duration=25)
        Activity.objects.create(user=users[3], type='Stealth', duration=40)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=150)
        Leaderboard.objects.create(team=dc, points=120)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
